import { FaUserCircle } from "react-icons/fa";

const commentsData = [
  {
    name: "Priya Sharma",
    text: "Absolutely loved this tutorial, so easy to follow!",
    replies: [],
  },
  {
    name: "Rohan Mehta",
    text: "This cleared up so many doubts I had, thanks!",
    replies: [
      {
        name: "Aditi Kapoor",
        text: "Same here, it was really helpful!",
        replies: [],
      },
      {
        name: "Vikram Singh",
        text: "Glad you found it useful, Aditi!",
        replies: [
          {
            name: "Ayesha Khan",
            text: "Totally agree with you, Vikram!",
            replies: [],
          },
          {
            name: "Karan Verma",
            text: "I learned so much from this video.",
            replies: [
              {
                name: "Sanya Patel",
                text: "Same here, can't wait for the next one!",
                replies: [
                  {
                    name: "Deepak Joshi",
                    text: "The editing on this was top-notch too.",
                    replies: [],
                  },
                  {
                    name: "Ravi Kumar",
                    text: "Yes! The examples were spot on.",
                    replies: [],
                  },
                  {
                    name: "Nisha Agarwal",
                    text: "Wish all tutorials were this clear.",
                    replies: [],
                  },
                ],
              },
              {
                name: "Manoj Yadav",
                text: "Exactly, I binged the whole playlist.",
                replies: [],
              },
            ],
          },
        ],
      },
      {
        name: "Ananya Desai",
        text: "You should make more videos like this.",
        replies: [],
      },
    ],
  },
  {
    name: "Harsh Malhotra",
    text: "The way you explained the concept was perfect.",
    replies: [
      {
        name: "Isha Bansal",
        text: "Agreed! Short and simple.",
        replies: [],
      },
    ],
  },
  {
    name: "Mehul Saxena",
    text: "I finally understand this topic, thanks!",
    replies: [
      {
        name: "Pooja Thakur",
        text: "Happy learning, Mehul!",
        replies: [],
      },
    ],
  },
  {
    name: "Sahil Gupta",
    text: "This was exactly what I was searching for.",
    replies: [
      {
        name: "Simran Arora",
        text: "Glad you found it useful!",
        replies: [],
      },
    ],
  },
  {
    name: "Neha Reddy",
    text: "Best explanation I’ve seen in months.",
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
