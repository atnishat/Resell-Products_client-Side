import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div>

            <div className='ques-1'>
                <h3> What are the different ways to manage a state in a React application?</h3>
                <p>There are four main types of state you need to properly manage in your React apps:
                    1.Local state:Local state is data we manage in one or another component.
                    Local state is most often managed in React using the useState hook.
                    For example, local state would be needed to show or hide a modal component or to
                    track values for a form component, such as form submission, when the form is
                    disabled and the values of a form’s inputs. <br />
                    2.Global state:Global state is data we manage across multiple components.
                    Global state is necessary when we want to get and update data anywhere in our app,
                    or in multiple components at least.A common example of global state is authenticated user state.
                    If a user is logged into our app, it is necessary to get and change their data throughout our application.<br />
                    3.Server state:Data that comes from an external server that must be integrated with our UI state.
                    Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.<br />
                    4.URL state: Data that exists on our URLs, including the pathname and query parameters.</p>

            </div>
            <div className='ques-2'>
                <h3> How does prototypical inheritance work?</h3>
                <p>The Prototypal Inheritance is a feature in javascript used to add
                    methods and properties in objects. It is a method by which an object
                    can inherit the properties and methods of another object. Traditionally,
                    in order to get and set the [[Prototype]] of an object,
                    we use Object.getPrototypeOf and Object..</p>

            </div>
            <div className='ques-3'>
                <h3> What is a unit test? Why should we write unit tests?</h3>
                <p>The main objective of unit testing is to isolate written code to
                    test and determine if it works as intended.Unit testing is an important step
                    in the development process, because if done correctly, it can help detect
                    early flaws in code which may be more difficult to find in later testing stages.</p>

            </div>
            <div className='ques-4'>
                <h3>React vs. Angular vs. Vue?</h3>
                <p>React requires solid JavaScript skills, while Vue.js is more oriented to novice developers. 
                    Similar to React, Vue.js enables writing with JSX, but the components are written with HTML
                     templates. And Angular JS is a TypeScript-based web application framework.
                     whereas Angular.js is used to build complex enterprise apps like progressive web apps and single-page apps.</p>

            </div>

        </div>
    );
};

export default Blog;