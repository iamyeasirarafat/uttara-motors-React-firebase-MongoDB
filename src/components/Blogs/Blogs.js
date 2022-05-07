import React from 'react';

const Blogs = () => {
    return (
        <div className="w-10/12 mx-auto ">
            <h2 className="text-3xl font-semibold my-12">My blogs</h2>
            <div className="md:grid grid-cols-2 gap-4 mb-10">
                <div className="">
                    <h2 className="text-left text-3xl ">what is the Difference between javascript and nodejs</h2>
                    <p className="mt-4"><span className="font-semibold">javascript</span> is a programming language is JavaScript. It works in any browser that has a suitable browser engine.</p>
                    <p className="mt-4">Generally used for any client-side action in a web application, such as potential attribute validation or refreshing the page at a set interval, or providing certain dynamic changes in web pages without refreshing the page.</p>
                    <p className="mt-4">Any JavaScript engine, such as Spider Monkey (FireFox), JavaScript Core (Safari), or V8 (Internet Explorer), may run JavaScript (Google Chrome).</p>
                    <p className="mt-4"><span className="font-semibold">Node</span> js is a JavaScript interpreter and environment with several essential libraries that JavaScript developers can use individually.</p>
                    <p className='mt-4'>It is primarily used for accessing or conducting any non-blocking operating system action, such as writing or executing a shell script, getting hardware-specific information, or running any backend job. rately.</p>
                    <p className='mt-4'>Only the V8 engine, which is mostly used by Google Chrome, can execute Node JS. And any javascript programs developed with Node JS will always run in the V8 Engine.</p>
                </div>
                <div className="">
                    <h2 className="text-3xl text-left mb-4">Differences between Sql and noSql databases.</h2>
                    <p ><span className="font-semibold">SQL</span> Relational databases are SQL databases. <br />

                        SQL databases have a specified schema and employ structured query language. <br />

                        Vertical scalability is a feature of SQL databases. <br />

                        Tables are the foundation of SQL databases. <br />

                        For multi-row transactions, SQL databases are preferable.</p>

                    <p className="mt-3"> Non-relational databases are known as <span className="font-semibold">NoSQL</span> databases. <br />

                        For unstructured data, NoSQL databases use dynamic schemas. <br />

                        NoSQL databases, on the other hand, are horizontally scalable. <br />

                        Document, key-value, graph, and wide-column stores are all examples of NoSQL databases. <br />

                        Unstructured data, such as documents or JSON, is best served by NoSQL.</p>
                </div>
                <div className="">
                    <h2 className="text-3xl text-left my-6">When should I use Nodejs</h2>
                    <p>Any project requires a programming environment and a runtime library that can build and/or understand your code and provides basic programming tools and assistance. Nodejs is a tool for programming in the Javascript language. Other languages with comparable tools include Python, Java, PHP, C#, C++, Go, and so on. So, if you want to develop a Javascript standalone program or server, you may utilize nodejs.</p>
                    <h2 className="text-3xl text-left my-6">When should I use MongoDB?</h2>
                    <p>If your application requires the capacity to save data so that it can be effectively queried or updated later, you'll almost certainly need to utilize a database. There are a slew of well-known databases. One such database is MongoDB. Other databases include MariaDB, MySql, CouchDB, DynamoDB (on AWS), and Postgres. Distinct databases have different strengths and new methods of being used, thus choosing the right/best database for what you're doing is a whole different topic.</p>
                </div>
                <div className="">
                    <h2 className="text-3xl text-left my-6">
                        What is the purpose of jwt and how does it work</h2>
                    <p>JWTs are an excellent way to securely communicate information between parties since they can be signed, ensuring that the senders are who they claim to be. Furthermore, the format of a JWT allows you to check for tampering with the content.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;