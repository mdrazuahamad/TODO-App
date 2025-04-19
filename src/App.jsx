import React, { useState } from "react";
import "./App.css";
import "font-awesome/css/font-awesome.min.css";

const initialTasks = [
  {
    id: "unique_id_001",
    createdAt: "2025-04-12T10:35:30.495Z",
    subtitle: "Weekly Report",
    tag: [
      { id: "tag_id_001", text: "it's Completed", color: "green", icon: "check-circle" },
      { id: "tag_id_002", text: "it's Cancelled", color: "red", icon: "times-circle" },
      {
        id: "tag_id_003",
        text: "it's In Progress",
        color: "yellow",
        icon: "hourglass-half",
      },
      { id: "tag_id_004", text: "Just Wrote this", color: "blue", icon: "circle" },
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

const TaskListItem = ({ task, onStatusChange }) => {
  return (
    <div key={task.id} className={`task-list-item ${task.status}`}>
      <img src={task.avatar} alt={task.title} className='task-avatar' />
      <div className='task-content'>
        <h4 className='task-title'>{task.title}</h4>
        <p className='task-text'>{task.text}</p>
        <select value={task.status} onChange={(e) => onStatusChange(e.target.value)}>
          <option value='done'>✅ Done</option>
          <option value='progress'>🟡 In Progress</option>
          <option value='cancel'>❌ Cancel</option>
        </select>
      </div>
    </div>
  );
};

const TaskCard = ({ task, onStatusUpdate }) => {
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
        {task.tasks.map((subtask) => (
          <TaskListItem
            key={subtask.id}
            task={subtask}
            onStatusChange={(newStatus) => onStatusUpdate(task.id, subtask.id, newStatus)}
          />
        ))}
      </ul>
    </div>
  );
};

const App = () => {
  const [taskList, setTaskList] = useState(initialTasks);

  const handleStatusUpdate = (taskId, subtaskId, newStatus) => {
    const updated = taskList.map((task) => {
      if (task.id === taskId) {
        const updatedSubtasks = task.tasks.map((sub) =>
          sub.id === subtaskId ? { ...sub, status: newStatus } : sub
        );

        const statusList = updatedSubtasks.map((t) => t.status);
        let updatedSubtitle = "⚪ No Subtasks Yet";

        if (statusList.length > 0) {
          const allDone = statusList.every((s) => s === "done");
          const anyInProgress = statusList.includes("progress");
          const anyCancelled = statusList.includes("cancel");

          if (allDone) updatedSubtitle = "✅ All Tasks Completed";
          else if (anyInProgress) updatedSubtitle = "🟡 Tasks In Progress";
          else if (anyCancelled) updatedSubtitle = "❌ Some Tasks Cancelled";
          else updatedSubtitle = "📝 Subtasks Updated";
        }

        return {
          ...task,
          tasks: updatedSubtasks,
          subtitle: updatedSubtitle,
        };
      }
      return task;
    });

    setTaskList(updated);
  };

  return (
    <div className='CardGroup'>
      {taskList.map((task) => (
        <TaskCard key={task.id} task={task} onStatusUpdate={handleStatusUpdate} />
      ))}
    </div>
  );
};

export default App;
