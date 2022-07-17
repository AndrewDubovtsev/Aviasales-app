import React from "react";
// Components
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
// Styles
import styles from "./TicketCard.module.scss";
import Stops from "../StopsFilters";

export interface ITicketCard {
  company: string;
  icon: string;
  price: string;
  departure: string;
  destination: string;
  departureTime: string;
  arrivalTime: string;
  travelTime: string;
  stops: string | string[] | [];
  companyCode: string;
}

const renderStops = (stops: string | string[] | []) => {
  if (!stops.length) {
    return (
      <Grid item className={styles.noStops} xs={4}>
        <Typography component="h2" variant="h2">
          Direct Flight
        </Typography>
      </Grid>
    );
  }

  if (stops.length === 1) {
    return (
      <Grid item className={styles.stops} xs={4}>
        <Typography component="h2" variant="h2">
          Stop
        </Typography>
        <Typography component="h3" variant="h3">
          {stops[0]}
        </Typography>
      </Grid>
    );
  }

  if (stops.length >= 2) {
    return (
      <Grid item className={styles.stops} xs={4}>
        <Typography component="h2" variant="h2">
          Stops
        </Typography>
        <Typography component="h3" variant="h3">
          {(stops as string[]).map((stop, index) => {
            if (index === stops.length - 1) {
              return stop;
            }
            return `${stop}, `;
          })}
        </Typography>
      </Grid>
    );
  }

  return;
};

const TicketCard: React.FC<ITicketCard> = ({
  company,
  icon,
  price,
  departure,
  destination,
  departureTime,
  arrivalTime,
  travelTime,
  stops,
  companyCode,
}) => {
  return (
    <Card className={styles.ticketCard}>
      <Box className={styles.priceLogo}>
        <Typography variant="h3" component="h3">
          {price} €
        </Typography>
        <img
          src={`../companies/${companyCode}.png`}
          alt={company}
          className={styles.companyLogo}
        />
      </Box>
      <Grid container className={styles.flightInfo}>
        <Grid item className={styles.airports} xs={4}>
          <Typography component="h2" variant="h2">
            {departure} — {destination}
          </Typography>
          <Typography component="h3" variant="h3">
            {departureTime} — {arrivalTime}
          </Typography>
        </Grid>
        <Grid item className={styles.travelTime} xs={4}>
          <Typography component="h2" variant="h2">
            Travel Time
          </Typography>
          <Typography component="h3" variant="h3">
            {travelTime}
          </Typography>
        </Grid>
        {renderStops(stops)}
      </Grid>
    </Card>
  );
};

export default TicketCard;
