`(-(-_-(-_(-_(-_-)_-)-_-)_-)_-)-)`
====

**Plur** is both an application framework and a nodal network cloud platform that scales apps and services across VMs.

The **framework** provides reusable cross-platform JS libraries for rapid development of both front-end and server-side applications. Applications are **interconnected** as plur *nodes* out of the box. The libraries also provide basic identity, authentication, and message passing.

The cloud **platform** builds on top of the framework, scaling core API services across a nodal network that we call a plur **cloud**. Each plur _cloud_ operates as simple network appliance that may be started and stopped at will. Internally, the cloud contains plur **nodes** that control VMs, authenticate requests, route messages, and scale any apps or services developed with the plur framework.

This project uses JS as an **enterprise** language by following closely behind the ECMA standard's progress. The core library is designed to operate normally **without transpiling**. Traditional enterprise language features not provided by ECMA are implemented by **convention**, using a single coding and documentation standard. Two exceptions are implemented by code; class **namespaces** and **interfaces**.

Documentation
-------------
* [Getting Started](/doc/Getting-Started.md)
* [Licensing](/doc/license)
* [Roadmap](/doc/Roadmap.md)
* [Code of Conduct](/doc/Code-of-Conduct.md)

Contributors
------------
* Roy Laurie (roy.laurie@asmov.company)

License (MIT)
--------------
Copyright (c) 2020 Asmov LLC

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
