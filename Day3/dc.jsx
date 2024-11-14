import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete'; // Import delete icon
import { Typography } from '@mui/material';

export default function TaskList() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Task 1' },
    { id: 2, text: 'Task 2' },
    { id: 3, text: 'Task 3' },
  ]);

  const handleDelete = (id) => {
    // Delete the task with the specified id
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', // Stack elements vertically
      alignItems: 'center', 
      height: '100vh' // Full height of the viewport
    }}>
      <Typography variant="h4" sx={{ marginBottom: 1 }}> {/* Centered title */}
        Task Lists
      </Typography>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {tasks.map((task) => (
          <ListItem
            key={task.id}
            disableGutters
            secondaryAction={
              <IconButton 
                aria-label="delete" 
                onClick={() => handleDelete(task.id)} // Delete the task when icon is clicked
                sx={{ bgcolor: 'red', color: 'white' }} // Set background color to red and text color to white
              >
                <DeleteIcon />
              </IconButton>
            }
          >
            <ListItemText 
              primary={task.text} 
              sx={{ color: 'red' }} // Set text color to red
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
}
