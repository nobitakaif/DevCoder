
"use client"

import Split from "react-split";
import Editor from "@monaco-editor/react";

const dummy = [{
        id: "101",
        name: "Authentication",
        description: `
        Design and implement a simple authentication system that supports user signup and signin using JWT tokens.

        You need to build two API endpoints:

        1. Signup endpoint where a user registers with an email and password.
        2. Signin endpoint where the user logs in and receives a JWT token.

        The password must be securely hashed before storing it in the database. When the user signs in, the server should verify the password and return a valid JWT token if the credentials are correct.

        The JWT token should contain the user's id and should expire after a specific duration (for example: 24 hours).

        You must ensure:
        • Passwords are hashed using a secure hashing algorithm (bcrypt recommended).
        • Duplicate email registrations are not allowed.
        • Invalid login attempts should return proper error messages.

        Example 1:

        Input:
        POST /signup
        {
        "email": "user@example.com",
        "password": "mypassword123"
        }

        Output:
        {
        "message": "User created successfully"
        }

        Example 2:

        Input:
        POST /signin
        {
        "email": "user@example.com",
        "password": "mypassword123"
        }

        Output:
        {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
        }

        Example 3:

        Input:
        POST /signin
        {
        "email": "user@example.com",
        "password": "wrongpassword"
        }

        Output:
        {
        "error": "Invalid email or password"
        }

        Constraints:
        • Email must be unique.
        • Password length must be at least 6 characters.
        • JWT tokens must expire after a fixed time.

        Follow-up:
        Can you implement a middleware that verifies the JWT token for protected routes?
        `
    }
]






export default function Page() {
  return (
    <Split
      className="flex h-screen "
      sizes={[30, 70]}
      minSize={200}
      gutterSize={10}
      direction="horizontal"
      cursor="col-resize"
    >
      <div className="bg-white p-4">Description</div>
      <div className="bg-gray-900 text-white p-4">Code Editor
        <Editor
            height="100%"
            language="javascript"
            defaultValue="// write code"
            
            />
      </div>
    </Split>
  );
}
