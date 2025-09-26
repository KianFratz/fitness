import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Button,
  Box,
} from "@mui/material";
import { addActivity } from "../services/api";

const ActivityForm = ({ onActivityAdded }) => {
  const [activity, setActivity] = useState({
    activityType: "RUNNING",
    duration: "",
    caloriesBurned: "",
    additionalMetrics: {},
  });

  const handleSubmit = async (e) => {
    e.preventDefault(); // 🔑 prevent full page reload
    console.log("Sending activity payload:", activity);

    try {
      await addActivity(activity)

      // Tell parent to refresh activities
      onActivityAdded();

      // Reset form
      setActivity({
        activityType: "RUNNING",
        duration: "",
        caloriesBurned: "",
      });
    } catch (error) {
      console.error("Error adding activity:", error);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mb: 4 }}>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel id="activityType">Activity Type</InputLabel>
        <Select
          value={activity.activityType}
          onChange={(e) => setActivity({...activity, activityType: e.target.value})}
        >
          <MenuItem value="RUNNING">Running</MenuItem>
          <MenuItem value="SWIMMING">Swimming</MenuItem>
          <MenuItem value="WALKING">Walking</MenuItem>
          <MenuItem value="CYCLING">Cycling</MenuItem>
        </Select>
      </FormControl>

      <TextField
        fullWidth
        label="Duration (Minutes)"
        type="number"
        sx={{ mb: 2 }}
        value={activity.duration}
        onChange={(e) => setActivity({...activity, duration: e.target.value})}
      />

      <TextField
        fullWidth
        label="Calories Burned"
        type="number"
        sx={{ mb: 2 }}
        value={activity.caloriesBurned}
        onChange={(e) => setActivity({...activity, caloriesBurned: e.target.value})}
      />

      <Button type="submit" variant="contained">
        Add Activity
      </Button>
    </Box>
  );
};

export default ActivityForm;
