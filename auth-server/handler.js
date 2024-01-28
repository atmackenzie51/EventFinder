'use strict';

const { google } = require("googleapis");
const calendar = google.calendar("v3");
const SCOPES = ["https://www.googleapis.com/auth/calendar.events.public.readonly"]; //SCOPES sets access levels i.e. read only
const { CLIENT_SECRET, CLIENT_ID, CALENDAR_ID } = process.env; //means that it is referring the config.json file to keep API secrets hidden
const redirect_uris = [
  "https://atmackenzie51.github.io/EventFinder/"
];

const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  redirect_uris[0]
);

module.exports.getAuthURL = async () => {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: "offline",
    scope: SCOPES, //access is stored in this variable
  });

  return {
    statusCode: 200,
    heaers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify({
      authUrl,
    }),
  };
};