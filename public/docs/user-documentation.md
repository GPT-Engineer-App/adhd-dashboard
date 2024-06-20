# ADHD Management Dashboard User Documentation

Welcome to the ADHD Management Dashboard! This documentation will guide you through the various features integrated into the dashboard, including the ManicTime API, aimlapi.com API, and codehooks.io API. Follow the instructions below to make the most out of the dashboard.

## Table of Contents
1. [Introduction](#introduction)
2. [Getting Started](#getting-started)
3. [Dashboard Overview](#dashboard-overview)
4. [ManicTime API Integration](#manictime-api-integration)
5. [AIML API Integration](#aiml-api-integration)
6. [Codehooks API Integration](#codehooks-api-integration)
7. [Troubleshooting](#troubleshooting)
8. [FAQ](#faq)
9. [Support](#support)

## Introduction
The ADHD Management Dashboard is designed to help you track your time, manage tasks, and review screenshots to stay focused and productive. The dashboard integrates with various APIs to provide comprehensive data and functionality.

## Getting Started
To get started with the ADHD Management Dashboard, follow these steps:
1. Clone the repository to your local machine.
2. Install the necessary dependencies using `npm install`.
3. Start the development server using `npm run dev`.
4. Open your browser and navigate to `http://localhost:3000`.

## Dashboard Overview
The dashboard consists of several sections:
- **Time Tracking**: View and analyze your time tracking data.
- **Task Management**: Organize and prioritize your tasks.
- **Screenshots**: Review your activity screenshots.
- **App Context & Progress**: Track the context and progress of apps being created, including their subject/idea.
- **Subscriptions & Costs**: Track subscriptions, fees, memberships, and other monthly costs.
- **Daily/Weekly/Monthly Summaries**: View summaries of your activities.
- **Notifications**: Manage and view notifications.
- **Navigation Bar**: Use the navigation bar at the top of the page to quickly access different sections of the dashboard.
- **Footer**: The footer contains basic information and links.

## ManicTime API Integration
The ManicTime API integration allows you to fetch and display user data and activities from ManicTime.

### Fetching User Data
1. Navigate to the ManicTime page by clicking on the "ManicTime" link in the navigation menu.
2. The dashboard will automatically fetch and display your user data, including your name and email.

### Fetching Activities
1. The dashboard will also fetch and display your activities for a specified date range.
2. You can view details such as the activity name, start time, and end time.

### Selecting Date Range
1. Use the date range picker to select the date range for fetching activities.
2. The activities for the selected date range will be displayed.

## AIML API Integration
The AIML API integration provides text analysis and image recognition capabilities.

### Text Analysis
1. Navigate to the AIML API page by clicking on the "AIML API" link in the navigation menu.
2. Enter the text you want to analyze in the input field under the "Text Analysis" section.
3. Click the "Analyze Text" button to perform the analysis.
4. The analysis result will be displayed below the button.

### Image Recognition
1. Enter the image URL you want to recognize in the input field under the "Image Recognition" section.
2. Click the "Recognize Image" button to perform the recognition.
3. The recognition result and the image will be displayed below the button.

### Image Upload
1. Use the file input to upload an image for recognition.
2. The recognition result will be displayed below the input.

## Codehooks API Integration
The Codehooks API integration allows you to create serverless functions and perform database operations.

### Creating Serverless Functions
1. Navigate to the Codehooks page by clicking on the "Codehooks" link in the navigation menu.
2. Enter the function name and code in the respective input fields under the "Create Serverless Function" section.
3. Click the "Create Function" button to create the function.
4. The created function details will be displayed below the button.

### Writing Serverless Functions
1. Use the code editor to write your serverless function code.
2. The created function details will be displayed below the editor.

### Performing Database Operations
1. Enter the collection name and data (in JSON format) in the respective input fields under the "Database Operations" section.
2. Click the appropriate button to perform the desired operation (Create, Read, Update, Delete).
3. The database response will be displayed below the buttons.

## Troubleshooting
If you encounter any issues while using the dashboard, try the following steps:
1. Ensure that you have entered valid API keys in the respective sections.
2. Check the browser console for any error messages.
3. Verify that your internet connection is stable.

## FAQ
**Q: How do I obtain API keys for the integrations?**
A: You can obtain API keys by signing up on the respective API provider's website.

**Q: Can I customize the dashboard?**
A: Yes, you can customize the dashboard by modifying the source code.

## Support
If you need further assistance, please contact our support team at support@example.com.

Thank you for using the ADHD Management Dashboard!