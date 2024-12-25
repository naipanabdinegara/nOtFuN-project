### Introduction
Welcome! This documentation will guide you through editing this template. This template is designed to be easy to edit, even for novice users.

### File Structure
* **path/js/data.json:** This file contains all the data used by the website, such as the website name, the title of each session, and its content.

### Editing the Website Name
To change the website name, open the `data.json` file and edit the value of the `webname` property.

### Managing Sessions
* **Default Sessions:** By default, this website has 4 sessions: Home, Project, About Me, and Attribution.
* **Changing Session Titles:** Each session has a `subname` property that is used to display the session title. For example, `subname1` is the title for the first session (Home).
* **Editing Session Content:** The content of each session is stored in a property that corresponds to its name. For example:
* **Home Session:** Edit the `content` property.
* **Project Session:** Edit the `project` property.
* **About Me Session:** Edit the `introduction` property.
* **Attribution Session:** Edit the `attribution` property.

### Adding HTML Elements
You can add HTML elements (e.g., `<p>`, `<img>`, `<div>`) directly into the session content to enhance the appearance of your website.

### Further Customization
If you have knowledge of HTML, CSS, and JavaScript, you can further customize the appearance and functionality of this website. For example, you can:
* Create a new session.
* Change the overall appearance of the website by editing the CSS file.
* Add interactive features using JavaScript.

### Conclusion
By following this guide, you can easily edit and customize this website to your liking. Good luck!

**Tips:**
* Use a text editor such as Visual Studio Code or Sublime Text to make editing JSON files easier.
* If you have any difficulties, feel free to search for tutorials or additional documentation on HTML, CSS, and JavaScript.

**Example data.json Structure:**
```json
{
"webname": "My Website",
"subname1": "Home",
"content": "<p>Welcome to my website!</p>",
"subname2": "Projects",
"project": "This is a list of my projects...",
// ... and so on
}
