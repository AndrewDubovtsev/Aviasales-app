import React from "react";
import styled from "styled-components";
// Components
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stops from "../components/StopsFilters";
import CompaniesFilters from "../components/CompaniesFilters";
import Filters from "../components/filters/Filters";
import Loader from "../components/loader/Loader";
import TicketCardsList from "../components/ticket-card/TicketCardsList";
import { ITicketCard } from "../components/ticket-card/TicketCard";
// Styles
import "../styles/App.scss";
// Data
import ticketCards from "../data/ticketCards.json";

const Home: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container>
        <Grid item xs={4}>
          <Stops />
          <CompaniesFilters />
        </Grid>
        <Grid item xs={8}>
          <Filters />
          <TicketCardsList ticketCards={ticketCards} />
          <Loader />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
