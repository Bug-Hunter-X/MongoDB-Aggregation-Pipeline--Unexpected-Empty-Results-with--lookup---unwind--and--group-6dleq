```javascript
const pipeline = [
  {
    $lookup: {
      from: "collectionB",
      localField: "_id",
      foreignField: "foreignKey",
      as: "relatedDocs",
    },
  },
  {
    $unwind: "$relatedDocs",
  },
  {
    $group: {
      _id: "$_id",
      relatedData: {
        $push: "$relatedDocs",
      },
    }
  }
];

await collectionA.aggregate(pipeline).toArray();
```