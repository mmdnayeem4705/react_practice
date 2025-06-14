import React from 'react';
import { Card, CardHeader, Avatar, CardContent, Chip, Typography } from '@mui/material';

const skills = [
  'HTML', 'CSS', 'Sass', 'JS', 'React', 'Redux', 'Node', 'MongoDB', 'Python', 'Flask',
  'Django', 'NumPy', 'Pandas', 'Data Analysis', 'MySQL', 'GraphQL', 'D3.js', 'Gatsby', 'Docker', 'Heroku', 'Git'
];

function UserProfileCard() {
  return (
    <Card style={{ maxWidth: 400, margin: 'auto', padding: 16, boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
      <CardHeader
        avatar={
          <Avatar
            alt="Asabehen Yetayeh"
            src="https://example.com/path-to-image.jpg" // Replace with actual image URL or local path
            sx={{ width: 80, height: 80 }}
            style={{ margin: 'auto' }}
          />
        }
        title={
          <Typography variant="h6" align="center">
            ASABEHEH YETAYEH
          </Typography>
        }
        subheader={
          <Typography variant="body2" color="text.secondary" align="center">
            Senior Developer, Finland
          </Typography>
        }
        sx={{ textAlign: 'center' }}
      />
      <CardContent>
        <Typography variant="subtitle1" gutterBottom>Skills</Typography>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center' }}>
          {skills.map((skill) => (
            <Chip key={skill} label={skill} style={{ backgroundColor: '#00BCD4', color: '#fff' }} />
          ))}
        </div>
        <Typography variant="caption" display="block" align="center" style={{ marginTop: 10 }}>
          Joined on Aug 30, 2020
        </Typography>
      </CardContent>
    </Card>
  );
}

export default UserProfileCard;