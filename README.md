# Jammming
> Jammming is a web application that allows users to search the Spotify library, create a custom playlist, and save it to their Spotify account.
> Live demo [_here_](https://peterkibuchi.github.io/jammming/).

## Table of Contents
* [General Info](#general-information)
* [Technologies Used](#technologies-used)
* [Features](#features)
* [Project Status](#project-status)
* [Room for Improvement](#room-for-improvement)
* [Acknowledgements](#acknowledgements)
* [Contact](#contact)
* [License](#license)


## General Information
- Jammming is powered by the Spotify API.
- I took on this project as a hands-on means of learning how to bring together knowledge of React components, passing state, requests and working with APIs to build a real world application.


## Technologies Used
- React


## Features
- Allows one to search the Spotify library, create a custom playlist, name it, and save it to their Spotify account.


## Project Status
Project is: _complete_.


## Room for Improvement
Room for improvement:
- Include preview samples for each track
- Add a loading screen while playlist is saving
- Update the access token logic to expire at exactly the right time, instead of setting expiration from when the user initiates their next search
- Ensure playlist information doesn’t get cleared if a user has to refresh their access token

To do:
- Only display songs not currently present in the playlist in the search results
- After user redirect on login, restoring the search term from before the redirect
- Enable user to adjust the order of tracks in the playlist


## Acknowledgements
- This is a challenge project on Codecademy's [Full Stack Engineer Career Path](https://www.codecademy.com/learn/paths/full-stack-engineer-career-path/).


## Contact
Created by [Peter Kibuchi](https://www.peterkibuchi.com/).


## License
This project is open source and available under the [MIT License](https://github.com/peterkibuchi/jammming/blob/main/LICENSE).
