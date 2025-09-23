import React, { useEffect, useState } from "react";
import { CardContent, Grid, Typography, Card } from "@mui/material";
import { getActivities } from "../services/api";
import { useNavigate } from "react-router";

function ActivityList() {
  const [activities, setActivities] = useState([]);
  const navigate = useNavigate();

  const fetchActivities = async () => {
    try {
      const response = await getActivities();
      setActivities(response.data);
      console.log("Activities fetched:", response.data);
      console.log(Array.isArray(response.data)); // should be true
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchActivities();
  }, []);

  return (
    <Grid container spacing={2}>
      {activities.length === 0 && (
        <Typography variant="body1" sx={{ mt: 2 }}>
          No activities found.
        </Typography>
      )}

      {activities.map((activity) => (
        <Grid item xs={12} sm={6} md={4} key={activity.id}>
          <Card
            sx={{ cursor: "pointer" }}
            onClick={() => navigate(`/activities/${activity.id}`)}
          >
            <CardContent>
              <Typography variant="h6">{activity.type}</Typography>
              <Typography>Duration: {activity.duration}</Typography>
              <Typography>
                Calories: {activity.caloriesBurn}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
  
  
  
}

export default ActivityList;
