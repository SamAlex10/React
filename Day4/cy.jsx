import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

export default function InfluentialBooksList() {
  const books = [
    {
      title: "The Holy Bible",
      content: "Religious text of Christianity, considered scared and canonical."
    },
    {
      title: "Quotations from Chairman Mao",
      content: "Collection of statements from speeches and writins by Mao Zedong."
    },
    {
      title: "Harry Potter series",
      content: "Fantasy novels by J.K. Rowling, following the life of a Young Wizard."
    },
    {
      title:"The Lord of the Rings",
      content: "High-fantasy novel written by J.R.R. Tolkien, set in Middle-earth."
    },
    {
      title: "To Kill a Mockingbird",
      content: "Novel by Harper Lee, dealing with racial injustice and moral growth."
    }
  ];

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Most Influential Books of All Time
      </Typography>
      <List>
        {books.map((book, index) => (
          <React.Fragment key={index}>
            <ListItem>
              <ListItemText primary={book.title} secondary={book.content} />
              <h />
            </ListItem>
            {index < books.length - 1 && <Divider />} {/* Add divider between items */}
          </React.Fragment>
        ))}
      </List>
    </div>
  );
}
