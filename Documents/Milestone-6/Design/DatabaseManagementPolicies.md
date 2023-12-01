## Database Management Policy and Practices

# Overview

The database management policy aims to establish guidelines and best practices for managing user data within the MongoDB database utilized by our ecommerce shopping application.

## Purpose

- This policy outlines the guidelines and practices for managing the MongoDB database utilized by our ecommerce shopping app. It primarily covers data handling procedures related to user registration and associated information.

## Data Collection and Storage

### User Registration:

- Users' personal information collected during registration (e.g., name, email, hashed passwords) will be stored in MongoDB.
- Passwords will be securely hashed using industry-standard encryption methods to prevent unauthorized access.
- No sensitive financial information will be stored in the database. Such information will be handled by secure payment gateways.

## Data Access and Security

### Access Controls:

- Access to the MongoDB database will be restricted to authorized personnel through role-based access control (RBAC).
- Strong authentication mechanisms (e.g., username/password, multi-factor authentication) will be enforced to access the database and its administrative features.

### Encryption and Security Measures:

- All data transmissions between the app and the MongoDB server will be encrypted using SSL/TLS protocols to prevent unauthorized access or data breaches.
- Routine security checks and vulnerability assessments will be conducted to identify and address potential weaknesses in the database infrastructure.

## Data Retention and Backup

### Data Retention:

- User data will be retained in accordance with legal and regulatory requirements. It will be securely deleted upon user request or account closure.
- No cart data will be stored in MongoDB. Cart items will reside in the user's local storage, and the data will be cleared periodically.

### Data Backup:

- Regular backups of the MongoDB database will be performed to ensure data integrity and availability in case of system failures, accidental deletions, or security incidents.

## Compliance and Review

### Compliance:

- This policy will comply with applicable data protection laws, industry standards, and best practices concerning the handling and storage of user data in MongoDB.
  Regular Review:

* The database management policy will undergo periodic reviews and updates to align with changing technology, regulations, or business needs.

# Conclusion

This database management policy focuses on safeguarding the confidentiality and security of user data stored in MongoDB. It ensures compliance with data
