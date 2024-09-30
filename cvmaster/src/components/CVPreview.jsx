import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Divider, Avatar, Chip } from '@mui/material';

const CVPreview = ({ data }) => {
  return (
    <Box sx={{ padding: 4, backgroundColor: '#e0f7fa', borderRadius: 3, boxShadow: 3, maxWidth: '1000px', margin: 'auto' }}>
      {/* Header avec photo et informations principales */}
      <Grid container spacing={2} alignItems="center" sx={{ marginBottom: 4 }}>
        <Grid item xs={12} sm={4}>
          <Avatar alt={data.name} src={data.photo} sx={{ width: 120, height: 120, boxShadow: 2 }} />
        </Grid>
        <Grid item xs={12} sm={8}>
          <Typography variant="h4" gutterBottom>
            {data.name}
          </Typography>
          <Typography variant="h6" color="textSecondary" sx={{ marginBottom: 1 }}>
            {data.title}
          </Typography>
          <Grid container spacing={1}>
            <Grid item>
              <Chip label={data.email} />
            </Grid>
            <Grid item>
              <Chip label={data.phone} />
            </Grid>
            <Grid item>
              <Chip label={data.address} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Divider sx={{ marginBottom: 4 }} />

      {/* Expériences */}
      <Typography variant="h5" gutterBottom>
        Expériences
      </Typography>
      <Grid container spacing={3} sx={{ marginBottom: 4 }}>
        {data.experiences && data.experiences.map((exp, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card variant="outlined" sx={{ borderLeft: '4px solid #009688', backgroundColor: '#ffffff' }}>
              <CardContent>
                <Typography variant="subtitle1">{exp.jobTitle}</Typography>
                <Typography color="textSecondary">{exp.company} | {exp.duration}</Typography>
                <Typography variant="body2" sx={{ marginTop: 1 }}>{exp.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Divider sx={{ marginBottom: 4 }} />

      {/* Éducation */}
      <Typography variant="h5" gutterBottom>
        Éducation
      </Typography>
      <Grid container spacing={3} sx={{ marginBottom: 4 }}>
        {data.education && data.education.map((edu, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card variant="outlined" sx={{ borderLeft: '4px solid #3f51b5', backgroundColor: '#ffffff' }}>
              <CardContent>
                <Typography variant="subtitle1">{edu.degree}</Typography>
                <Typography color="textSecondary">{edu.institution} | {edu.year}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Divider sx={{ marginBottom: 4 }} />

      {/* Compétences */}
      <Typography variant="h5" gutterBottom>
        Compétences
      </Typography>
      <Grid container spacing={2} sx={{ marginBottom: 4 }}>
        {data.skills && data.skills.map((skill, index) => (
          <Grid item key={index}>
            <Chip label={skill.skill} color="primary" sx={{ fontSize: '1rem', padding: 1 }} />
          </Grid>
        ))}
      </Grid>

      <Divider sx={{ marginBottom: 4 }} />

      {/* Projets */}
      <Typography variant="h5" gutterBottom>
        Projets
      </Typography>
      <Grid container spacing={3}>
        {data.projects && data.projects.map((proj, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card variant="outlined" sx={{ borderLeft: '4px solid #ff5722', backgroundColor: '#ffffff' }}>
              <CardContent>
                <Typography variant="subtitle1">{proj.title}</Typography>
                <Typography variant="body2">{proj.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CVPreview;
