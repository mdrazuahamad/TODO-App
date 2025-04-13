import React from "react";
import "./App.css";
import "font-awesome/css/font-awesome.min.css";

const tasks = [
  {
    id: "unique_id_001",
    createdAt: "2025-04-12T10:35:30.495Z",
    subtitle: "Weekly Report",
    tag: [
      {
        id: "tag_id_001",
        text: "it's Completed",
        color: "green",
        icon: "check-circle",
      },
      {
        id: "tag_id_002",
        text: "it's Cancelled",
        color: "red",
        icon: "times-circle",
      },
      {
        id: "tag_id_003",
        text: "it's In Progress",
        color: "yellow",
        icon: "hourglass-half",
      },
      {
        id: "tag_id_004",
        text: "Just Wrote this",
        color: "blue",
        icon: "circle",
      },
    ],
    comments: [
      {
        id: "comment_id_001",
        user: {
          id: "user_id_001",
          name: "Razu Ahamad",
          avatar: "/assets/MD Razu Ahamad 5.png",
        },
        text: "This is a comment",
      },
      {
        id: "comment_id_002",
        user: {
          id: "user_id_002",
          name: "John Doe",
          avatar:
            "/assets/WhatsApp_Image_2025-02-24_at_15.20.29_bcd59c61-removebg-preview.png",
        },
        text: "This is a comment",
      },
    ],
    tasks: [
      {
        id: "task_id_001",
        avatar:
          "/assets/WhatsApp_Image_2025-02-24_at_15.20.29_bcd59c61-removebg-preview.png",
        title: "Foggy Nelson",
        text: "Here to clean the streets of hell's Kitchen",
        status: "done",
      },
      {
        id: "task_id_002",
        avatar:
          "/assets/WhatsApp_Image_2025-02-24_at_15.20.29_bcd59c61-removebg-preview.png",
        title: "Louise CK",
        text: "Here to clean the streets of hell's Kitchen",
        status: "cancel",
      },
      {
        id: "task_id_003",
        avatar:
          "/assets/WhatsApp_Image_2025-02-24_at_15.20.29_bcd59c61-removebg-preview.png",
        title: "Elbert Einstein",
        text: "Here to clean the streets of hell's Kitchen",
        status: "progress",
      },
    ],
  },
  {
    id: "unique_id_001",
    createdAt: "2025-04-12T10:35:30.495Z",
    subtitle: "Weekly Report",
    tag: [
      {
        id: "tag_id_001",
        text: "it's Completed",
        color: "green",
        icon: "check-circle",
      },
      {
        id: "tag_id_002",
        text: "it's Cancelled",
        color: "red",
        icon: "times-circle",
      },
      {
        id: "tag_id_003",
        text: "it's In Progress",
        color: "yellow",
        icon: "hourglass-half",
      },
      {
        id: "tag_id_004",
        text: "Just Wrote this",
        color: "blue",
        icon: "circle",
      },
    ],
    comments: [
      {
        id: "comment_id_001",
        user: {
          id: "user_id_001",
          name: "Razu Ahamad",
          avatar: "/assets/MD Razu Ahamad 5.png",
        },
        text: "This is a comment",
      },
    ],
    tasks: [
      {
        id: "task_id_001",
        avatar:
          "/assets/WhatsApp_Image_2025-02-24_at_15.20.29_bcd59c61-removebg-preview.png",
        title: "Foggy Nelson",
        text: "Here to clean the streets of hell's Kitchen",
        status: "done",
      },
      {
        id: "task_id_002",
        avatar:
          "/assets/WhatsApp_Image_2025-02-24_at_15.20.29_bcd59c61-removebg-preview.png",
        title: "Louise CK",
        text: "Here to clean the streets of hell's Kitchen",
        status: "cancel",
      },
      {
        id: "task_id_003",
        avatar:
          "/assets/WhatsApp_Image_2025-02-24_at_15.20.29_bcd59c61-removebg-preview.png",
        title: "Elbert Einstein",
        text: "Here to clean the streets of hell's Kitchen",
        status: "progress",
      },
    ],
  },
  {
    id: "unique_id_001",
    createdAt: "2025-04-12T10:35:30.495Z",
    subtitle: "Weekly Report",
    tag: [
      {
        id: "tag_id_001",
        text: "it's Completed",
        color: "green",
        icon: "check-circle",
      },
      {
        id: "tag_id_002",
        text: "it's Cancelled",
        color: "red",
        icon: "times-circle",
      },
      {
        id: "tag_id_003",
        text: "it's In Progress",
        color: "yellow",
        icon: "hourglass-half",
      },
      {
        id: "tag_id_004",
        text: "Just Wrote this",
        color: "blue",
        icon: "circle",
      },
    ],
    comments: [
      {
        id: "comment_id_001",
        user: {
          id: "user_id_001",
          name: "Razu Ahamad",
          avatar: "/assets/MD Razu Ahamad 5.png",
        },
        text: "This is a comment",
      },
    ],
    tasks: [
      {
        id: "task_id_003",
        avatar:
          "/assets/WhatsApp_Image_2025-02-24_at_15.20.29_bcd59c61-removebg-preview.png",
        title: "Elbert Einstein",
        text: "Here to clean the streets of hell's Kitchen",
        status: "progress",
      },
    ],
  },
];

function getDay(dateStr) {
  const date = new Date(dateStr).getDay();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return days[date];
}

function formatDate(dateStr) {
  const date = new Date(dateStr);
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
}

// const TagListItem = ({ tag }) => {
//   return (
//     <li className='tag-item' key={tag.id}>
//       <i
//         className={`fa fa-${tag.icon}`}
//         style={{ color: tag.color, marginRight: "8px" }}></i>
//       {tag.text}
//     </li>
//   );
// };
const TagListItem = ({ tag }) => {
  return (
    <li key={tag.id} className={`tag-item ${tag.color}`}>
      <i className={`fa fa-${tag.icon} tag-icon`}></i>
      {tag.text}
    </li>
  );
};

const CommentListItem = ({ comment }) => {
  return (
    <div key={comment.id} className='comment-item'>
      <div className='comment-header'>
        <img
          src={comment.user.avatar}
          alt={comment.user.name}
          className='comment-avatar'
        />
        <h4>{comment.user.name}</h4>
      </div>
      <p className='comment-text'>{comment.text}</p>
    </div>
  );
};

// const TaskListItem = ({ task }) => {
//   return (
//     <div key={task.id} className='subtask-item'>
//       <img src={task.avatar} alt={task.title} className='subtask-avatar' />
//       <div>
//         <li>
//           <h4>{task.title}</h4>
//           <p className={`status ${task.status}`}>{task.status}</p>
//           <p>{task.text}</p>
//         </li>
//       </div>
//     </div>
//   );
// };
const TaskListItem = ({ task }) => {
  return (
    <div key={task.id} className={`task-list-item ${task.status}`}>
      <img src={task.avatar} alt={task.title} className='task-avatar' />
      <div className='task-content'>
        <h4 className='task-title'>{task.title}</h4>
        <p className='task-status'>{task.status}</p>
        <p className='task-text'>{task.text}</p>
      </div>
    </div>
  );
};

const TaskCard = ({ task }) => {
  return (
    <div className='CardBox'>
      <h1 className='title'>
        {getDay(task.createdAt)} {formatDate(task.createdAt)}
      </h1>
      <h3 className='subtitle'>{task.subtitle}</h3>

      <ul className='tag-list'>
        {task.tag.map((tag) => (
          <TagListItem key={tag.id} tag={tag} />
        ))}
      </ul>

      <div className='hrLine'></div>

      <p className='notes-label'>Notes: Link To People</p>

      <div className='comments-section'>
        {task.comments.map((comment) => (
          <CommentListItem key={comment.id} comment={comment} />
        ))}
      </div>

      <ul className='subtask-list'>
        {task.tasks.map((task) => (
          <TaskListItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
};

const App = () => {
  return (
    <div className='CardGroup'>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
};

export default App;
