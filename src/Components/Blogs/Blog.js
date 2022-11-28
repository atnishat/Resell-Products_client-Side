import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div>

            <div className='ques-1'>
                <h3> what is the Difference between SQL and NoSQL?</h3>
                <p>SQL is the programming language used to interface with relational databases.
                    Relational databases model data as records in rows and tables with logical links between them.
                    NoSQL is a class of DBMs that are non-relational and generally do not use SQL..</p>

            </div>
            <div className='ques-2'>
                <h3> What is JWT, and how does it work?</h3>
                <p>JSON Web Token (JWT) is an open standard (RFC 7519) for securely
                    transmitting information between parties as JSON object.
                    It is compact, readable and digitally signed using a private key/ or a
                    public key pair by the Identity Provider(IdP)..</p>

            </div>
            <div className='ques-3'>
                <h3> What is the difference between javascript and NodeJS?</h3>
                <p>JavaScript:It is an accessible, bridge, parsed, lightweight, reactive,
                    and web apps programming language. It's a programming language, after all.
                    Any browser with a competent browser engine will operate. <br />

                    Node.js:Node.js is a JavaScript runtime environment that achieves low latency
                    and high throughput by taking a “non-blocking” approach to serving requests.
                    In other words, Node.js wastes no time or resources on waiting for I/O
                    requests to return.</p>

            </div>
            <div className='ques-4'>
                <h3>How does NodeJS handle multiple requests at the same time?</h3>
                <p>NodeJS receives multiple client requests and places them into EventQueue.
                     NodeJS is built with the concept of event-driven architecture.
                      NodeJS has its own EventLoop which is an infinite loop that receives 
                      requests and processes them</p>

            </div>

        </div>
    );
};

export default Blog;