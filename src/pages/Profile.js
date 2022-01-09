import { useState } from "react";
import { Box, Typography, CardMedia } from "@mui/material";

import EducationTab from "../containers/Profile/EducationTab";
import ExperienceTab from "../containers/Profile/ExperienceTab";
import SkillsTab from "../containers/Profile/SkillsTab";
import ProjectsTab from "../containers/Profile/ProjectsTab";

const Profile = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabChangeHandler = (index) => {
    setActiveTab(index);
  };

  const DUMMY_DATA = {
    image:
      "https://scontent.ftzl2-1.fna.fbcdn.net/v/t39.30808-1/c100.51.172.173a/p240x240/251979491_2463146513817387_4101037018365068630_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=7206a8&_nc_ohc=6cSfqirG_DgAX_IsZ-T&_nc_ht=scontent.ftzl2-1.fna&oh=00_AT-Mr9Hsk4LbwZHNLRA0DdE8Rlx_Fj0djAEQ0X_ZF6XR4g&oe=61DF5406",
    firstName: "Emir",
    lastName: "Barucija",
    bio: "Student softverskog inzenjerstva",
    location: "Zenica, BiH",
  };

  const tabOptions = ["Edukacija", "Iskustvo", "Vjestine", "Projekti"];

  const mt = "2vh";

  return (
    <>
      <Box
        sx={{
          width: "100%",
          bgcolor: "primary.main",
          borderRadius: "0px 0px 35px 35px",
          boxShadow: "0px 2px 10px 1px #ccc",
        }}
      >
        <Typography variant="h4" sx={{ p: "10px" }}>
          Profil
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <CardMedia
            image={DUMMY_DATA.image}
            component="img"
            alt="avatar"
            sx={{ maxWidth: "40%", borderRadius: "50%", mt }}
          />

          <Typography variant="h5" sx={{ textAlign: "center", mt }}>
            {`${DUMMY_DATA.firstName} ${DUMMY_DATA.lastName}`}
          </Typography>

          <Typography variant="h5" sx={{ textAlign: "center", mt }}>
            {DUMMY_DATA.bio}
          </Typography>

          <Typography
            variant="h5"
            sx={{
              fontWeight: "semiBold",
              textAlign: "center",
              mt,
              color: "text.secondary",
            }}
          >
            {DUMMY_DATA.location}
          </Typography>
        </Box>
        <Box
          sx={{ py: "3vh", display: "flex", justifyContent: "space-evenly" }}
        >
          {tabOptions.map((option, index) => (
            <Typography
              variant="body1"
              sx={{
                mx: "2vw",
                borderBottom: index === activeTab ? "2px solid black" : "none",
              }}
              onClick={() => tabChangeHandler(index)}
              key={index}
            >
              {option}
            </Typography>
          ))}
        </Box>
      </Box>
      {activeTab === 0 && <EducationTab></EducationTab>}
      {activeTab === 1 && <ExperienceTab></ExperienceTab>}
      {activeTab === 2 && <SkillsTab></SkillsTab>}
      {activeTab === 3 && <ProjectsTab></ProjectsTab>}
    </>
  );
};

export default Profile;
