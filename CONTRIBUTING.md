# Crisp Project Contribution Guidelines
Thank you for your interest in contributing to the Crisp project! To ensure a smooth collaboration, please follow these guidelines when making contributions.

## Branching Guidelines
When creating branches for your contributions, please adhere to the following naming conventions:

### Bugfix: Use the following format for bugfix branches:
```sql
Copy code
bugfix/[Jira Ticket number]-[insert GitHub name]-describe-changes-in-short-here
```

### Feature: Use the following format for feature branches:
```sql
Copy code
feature/[Jira Ticket number]-[insert GitHub name]-describe-changes-in-short-here
```

### Enhancement: Use the following format for enhancement branches:
```sql
Copy code
enhancement/[Jira Ticket number]-[insert GitHub name]-describe-changes-in-short-here
```

## Contribution Process
### Fork the Repository:
Fork the Crisp repository to your GitHub account.

### Clone the Repository:
Clone your forked repository to your local machine:
```bash
Copy code
git clone https://github.com/your-username/crisp.git
```

### Create a Branch:
Create a new branch for your contribution:
```bash
Copy code
git checkout -b bugfix/[Jira Ticket number]-your-github-name-describe-changes
```

### Make Changes:
Implement your bugfix, feature, or enhancement on this branch.

### Testing:
Create tests for all components and helpers, aiming for at least 70% test coverage.

### Commit Changes:
Commit your changes with clear and concise commit messages:
```sql
Copy code
git commit -m "Brief description of the changes made"
```

### Push Changes:
Push your branch to your forked repository:
```bash
Copy code
git push origin bugfix/[Jira Ticket number]-your-github-name-describe-changes
```

### Create Pull Request (PR):
Create a Pull Request to the dev branch of the main Crisp repository.
Provide a detailed description of your changes and any additional notes.

### Request Review:
Request the repository owner and at least one other default reviewer to review your Pull Request.

### Iterate and Discuss:
Respond to any feedback and make necessary changes as requested during the review process.

### Merge:
Once your Pull Request is approved, it will be merged into the dev branch.

## Thank you for your contribution to Crisp! We appreciate your time and effort in making the project better. If you have any questions or need assistance, feel free to reach out. Happy coding!
