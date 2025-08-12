import { FaUserCircle } from "react-icons/fa";

const commentsData = [
  {
    name: "Achal Kumar",
    text: "this is the best video in entiern youtube channel",
    replies: [],
  },
  {
    name: "Achal Kumar",
    text: "this is the best video in entiern youtube channel",
    replies: [
      {
        name: "Achal Kumar",
        text: "this is the best video in entiern youtube channel",
        replies: [],
      },
      {
        name: "Achal Kumar",
        text: "this is the best video in entiern youtube channel",
        replies: [
          {
            name: "Achal Kumar",
            text: "this is the best video in entiern youtube channel",
            replies: [],
          },
          {
            name: "Achal Kumar",
            text: "this is the best video in entiern youtube channel",
            replies: [
              {
                name: "Achal Kumar",
                text: "this is the best video in entiern youtube channel",
                replies: [
                  {
                    name: "Achal Kumar",
                    text: "this is the best video in entiern youtube channel",
                    replies: [],
                  },
                  {
                    name: "Achal Kumar",
                    text: "this is the best video in entiern youtube channel",
                    replies: [],
                  },
                  {
                    name: "Achal Kumar",
                    text: "this is the best video in entiern youtube channel",
                    replies: [],
                  },
                ],
              },
              {
                name: "Achal Kumar",
                text: "this is the best video in entiern youtube channel",
                replies: [],
              },
            ],
          },
        ],
      },
      {
        name: "Achal Kumar",
        text: "this is the best video in entiern youtube channel",
        replies: [],
      },
    ],
  },
  {
    name: "Achal Kumar",
    text: "this is the best video in entiern youtube channel",
    replies: [
      {
        name: "Achal Kumar",
        text: "this is the best video in entiern youtube channel",
        replies: [],
      },
    ],
  },
  {
    name: "Achal Kumar",
    text: "this is the best video in entiern youtube channel",
    replies: [
      {
        name: "Achal Kumar",
        text: "this is the best video in entiern youtube channel",
        replies: [],
      },
    ],
  },
  {
    name: "Achal Kumar",
    text: "this is the best video in entiern youtube channel",
    replies: [
      {
        name: "Achal Kumar",
        text: "this is the best video in entiern youtube channel",
        replies: [],
      },
    ],
  },
  {
    name: "Achal Kumar",
    text: "this is the best video in entiern youtube channel",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex items-start p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200">
      <FaUserCircle className="w-10 h-10 text-gray-500 flex-shrink-0" />
      <div className="ml-3">
        <p className="font-semibold text-gray-900">{name}</p>
        <p className="text-gray-700 text-sm mt-1">{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index} className="mt-3">
      <Comment data={comment} />
      {comment.replies?.length > 0 && (
        <div className="pl-6 mt-2 border-l-2 border-gray-200">
          <CommentsList comments={comment.replies} />
        </div>
      )}
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="mt-4">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Comments</h2>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
