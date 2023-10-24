# AD-WIDGET: A Dynamic Recommendations Widget

AD-WIDGET is a flexible and dynamic recommendations widget designed to seamlessly integrate with diverse API sources and publishers. By fetching recommendations based on the configurations set for APIs and publishers, the widget offers tailored content suggestions to end-users.

## Table of Contents

- [Features](#features)
- [Requirements](#requirements)
- [Installation and Usage](#installation-&-usage)
- [Design Philosophy](#design-philosophy)

## Features

- Dynamic API Integration: Integrates with a multitude of API sources through the ApiFactory. Easily build and integrate new API providers with unique properties.

- Flexible Publisher Support: Supports a variety of publishers through the PublisherFactory. Each publisher can possess its unique properties, affecting both backend behavior and UI requirements. New publishers can be quickly integrated into the system.

- Recommendation Types: Currently supports organic and sponsored recommendations. Built with the flexibility to easily introduce new recommendation types in the future.

- Customizable Display: Widget appearance, including headers and recommendation containers, is adjustable via the display.js module.

- Efficient and Robust: Implements retries in fetching recommendations and has robust error handling to ensure consistent data retrieval and display, even during network or data issues.

## Requirements

- Web Browser (e.g., Chrome, Firefox, Safari).
- Text Editor (e.g., VS Code, Atom).

## Installation & Usage

### Prerequisites

- Node.js and npm

### Steps

1. Clone the repository:

   ```bash
   git clone git@github.com:zejj42/ad-widget.git
   ```

2. Navigate to the cloned directory:

   ```bash
   cd ad-widget
   ```

#### Server-side

1. Navigate to the server directory:

   ```bash
   cd server
   ```

2. Install Dependencies:

   ```bash
   npm install
   ```

3. Run the server:

   ```bash
       node server.js
   ```

#### Client-side

1. Open a new terminal and navigate to the client directory:

   ```bash
   cd client
   ```

2. Install Dependencies:

   ```bash
   npm install
   ```

3. Run the http server:

   ```bash
   http-server
   ```

4. Run the http server:

   ```bash
   open client on http://127.0.0.1:8080
   ```

## Design Philosophy

- Modularity and Flexibility: At its core, AD-WIDGET is designed to be modular and flexible, allowing for easy integrations and expansions.

- Factory Design Pattern: Utilizing factories for APIs, publishers, and recommendations ensures that new sources or types can be integrated seamlessly without modifying existing code.

- Separation of Concerns: Clear demarcation of responsibilities is maintained. For instance, fetching functionalities are distinct from display functionalities.

- Fallback Mechanisms: The application consistently offers a smooth user experience by providing fallback options for missing or erroneous data.