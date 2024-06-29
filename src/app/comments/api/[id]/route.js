//update data
export async function PATCH(request, { params }) {
  const id = parseInt(params.id);
  const body = await request.json();
  const index = comments.findIndex((comment) => comment.id === id);
  comments[index] = {
    id,
    text: body.text,
  };
  return Response.json({
    comments,
  });
}

// delete data

export async function DELETE(request, { params }) {
  const id = parseInt(params.id);
  const newComments = comments.filter((comment) => comment.id !== id);
  console.log(newComments);
  return Response.json({
    message: "Deleted Message",
    comments: newComments,
  });
}

// fake data
const comments = [
  {
    id: 1,
    text: "comment 1",
  },
  {
    id: 2,
    text: "comment 2",
  },
  {
    id: 3,
    text: "comment 3",
  },
];
