import React, { useRef } from 'react';
import { Box, Typography, Grid, Divider, Avatar, Button, ThemeProvider } from '@mui/material';
import html2canvas from 'html2canvas';

const CVPreview = ({ data }) => {
  const { theme } = data.template;
  const cvRef = useRef();

  const exportToImage = () => {
    const element = cvRef.current;
    html2canvas(element, {
      scale: 2, 
      useCORS: true, 
    }).then((canvas) => {
      const link = document.createElement('a');
      link.href = canvas.toDataURL('image/png');
      link.download = `${data.name}_CV.png`;
      link.click();
    });
  };

  return (
    <>
        <ThemeProvider theme={theme}>
        <Box
        ref={cvRef}
            sx={{
            padding: 4,
            backgroundColor: theme.palette.background.default,
            borderRadius: 3,
            maxWidth: '800px',
            margin: 'auto',
            fontFamily: theme.typography.fontFamily,
            color: theme.palette.text.primary,
            position: 'relative', 
            overflow: 'hidden', 
            }}
        >

            {/* CV Content */}
            <Box>
            <CVContent data={data} />
            </Box>
        </Box>

        </ThemeProvider>
        {/* Button to export as an image */}
        <Box sx={{ textAlign: 'right', marginTop: 2 }}>
          <Button variant="outlined" color="primary" onClick={exportToImage}>
            Exporter en tant qu'image
          </Button>
        </Box>
    </>    
  );
};

const CVContent = ({ data }) => (
  <>
    <Grid container spacing={2} alignItems="center" sx={{ marginBottom: 4 }}>
      <Grid item xs={12} sm={3}>
        <Avatar alt={data.name} src={data.profileImage} sx={{ width: 120, height: 120, boxShadow: 2 }} />
      </Grid>
      <Grid item xs={12} sm={9}>
        <Typography variant="h4" gutterBottom>
          {data.name}
        </Typography>
        <Typography variant="h6" color="textSecondary">
          {data.title}
        </Typography>
        <Box sx={{ marginTop: 2 }}>
          <Typography variant="body1" sx={{ marginRight: 1 }}>
            {data.email}
          </Typography>
          <Typography variant="body1" sx={{ marginRight: 1 }}>
            {data.phone}
          </Typography>
          <Typography variant="body1">
            {data.address}
          </Typography>
        </Box>
      </Grid>
    </Grid>

    <Divider sx={{ marginBottom: 4 }} />

    <Typography variant="h5" gutterBottom>
      Expériences Professionnelles
    </Typography>
    {data.experiences && data.experiences.map((exp, index) => (
      <Box key={index} sx={{ marginBottom: 3 }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          {exp.jobTitle}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          {exp.company} | {exp.duration}
        </Typography>
        <Typography variant="body1" sx={{ marginTop: 1 }}>
          {exp.description}
        </Typography>
      </Box>
    ))}

    <Divider sx={{ marginBottom: 4 }} />

    <Typography variant="h5" gutterBottom>
      Éducation
    </Typography>
    {data.education && data.education.map((edu, index) => (
      <Box key={index} sx={{ marginBottom: 3 }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          {edu.degree}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          {edu.institution} | {edu.year}
        </Typography>
      </Box>
    ))}

    <Divider sx={{ marginBottom: 4 }} />

    <Typography variant="h5" gutterBottom>
      Compétences
    </Typography>
    <Grid container spacing={1} sx={{ marginBottom: 3 }}>
      {data.skills && data.skills.map((skill, index) => (
        <Grid item key={index}>
          <Typography variant="body1" sx={{ padding: 1 }}>
            {skill.skill} ({skill.level})
          </Typography>
        </Grid>
      ))} 
    </Grid>

    <Divider sx={{ marginBottom: 4 }} />

    <Typography variant="h5" gutterBottom>
      Projets
    </Typography>
    {data.projects && data.projects.projectss.map((proj, index) => (  
      <Box key={index} sx={{ marginBottom: 3 }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          {proj.title}
        </Typography>
        <Typography variant="body1">
          {proj.description}
        </Typography>
      </Box>
    ))}
  </>
);

export default CVPreview;
