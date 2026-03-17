
"use client"

import Split from "react-split";
import Editor from "@monaco-editor/react";
import CodeEditor from "./code-editor";

const dummy = [{
        id: "101",
        name: "Authentication",
        shortDescription : `Design and implement a simple authentication system that supports user signup and signin using JWT tokens.
        You need to build two API endpoints`,
        example : ["Signup endpoint where a user registers with an email and password","Signin endpoint where the user logs in and receives a JWT token.","The password must be securely hashed before storing it in the database. When the user signs in, the server should verify the password and return a valid JWT token if the credentials are correct.","The JWT token should contain the user's id and should expire after a specific duration (for example: 24 hours)."],
        routes : [{
          "0" : {
            GET:"/health-check",
            status : "200"
          },
          "1":{
            POST : "/auth/signup",
            Body : {
              "email": "user@example.com",
              "password": "mypassword123"
            }
          },
          output : {
              "message": "User created successfully"
              }
        }],
        description: `
        
        

        You must ensure:
        • Passwords are hashed using a secure hashing algorithm (bcrypt recommended).
        • Duplicate email registrations are not allowed.
        • Invalid login attempts should return proper error messages.

        Example 1:

        Input:
        POST /signup
        

        Output:
        

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
      sizes={[50, 50]}
      minSize={200}
      gutterSize={10}
      direction="horizontal"
      cursor="col-resize"
    >
      <div className="bg-white p-4">
        {dummy.map((item)=>(
          <div className="text-black flex flex-col gap-3" key={item.id}>
              <div className="flex gap-3">
                <div className=" text-4xl font-bold">{item.id}.</div>
                <div className=" text-4xl font-bold">{item.name}</div>
              </div>
              <div className="">
                <div className="text-lg">{item.shortDescription}</div>
              </div>
              <div className="">
                <span className="font-semibold text-xl">Rule.</span>
                <div className="bg-[#f0f8ff] text-black rounded-lg shadow-lg">
                    {item.example.map((ex, idx) =>(
                        <div className="px-4 py-2" key={idx}>
                                {++idx}. {ex}
                              </div>
                              ))}
                        </div>
                </div>
                <div>
                  <span className="font-bold text-xl ">Routes.</span>
                  <div className="font-semibold">Success Response</div>
                  <div>
                    {/* input  */}
                      <div className="flex">
                        {item.routes.map((route, idx)=>(
                         <div key={idx}  className="flex flex-col gap-3" >
                            <div>
                               <span className="text-green-400 font-bold">GET :</span>
                              <span className=" bg-[rgb(104,177,213)] rounded-md px-1 py-0.5 text-center text-[rgb(5,46,65)]">{route[0].GET}</span>
                              <span className="ml-3 font-semibold">Response - </span>
                              <span>status : {route[0].status}</span>
                            </div>
                            <div>
                               <span className="text-green-400 font-bold">POST : </span>
                               <span className=" bg-[rgb(104,177,213)] rounded-md px-1 py-0.5 text-center text-[rgb(5,46,65)]">{route[1].POST}</span>
                               <span className="block ml-8 font-semibold">Body : <span></span></span>
                            </div>
                         </div>
                        ))}
                      </div>
                      {/* success output */}
                      <div>
                        
                        
                      </div>
                  </div>
                  <div className="font-semibold">Failed Response</div>
                  <div>
                    {/* input */}
                      <div>

                      </div>
                      {/* failed out */}
                      <div>
                        
                      </div>
                  </div>
                </div>
                
          </div>
          
        ))}
      </div>
      <div className="bg-gray-900 text-white p-4">Code Editor
        <CodeEditor/>
      </div>
    </Split>
  );
}
