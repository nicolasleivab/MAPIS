# MAPIS Architecture: A Modular and Isolated Frontend Development Approach

MAPIS (Model, Application, Presentation, Infrastructure, Services) is a modern architecture designed to address the increasing complexity of front-end applications like React. It is particularly well-suited for front-end monorepos, offering a clear structure to manage growing complexity while keeping development focused and manageable for small to medium-sized teams.

Over the past decade, front-end systems have evolved from simple UI layers to highly interactive, complex systems that handle substantial business logic, state management, and asynchronous operations. MAPIS provides a structured, modular approach that ensures maintainability and scalability for modern front-end development while adapting to the rise of smaller development teams and performance-boosting tools.

MAPIS organizes an application into five distinct layers, each with a dedicated responsibility:

- Model: This layer handles state management, data processing, and business logic. It governs the data lifecycle using React hooks, context APIs, and logic to handle complex state transformations.

- Application: Serving as the core orchestrator, the Application layer combines data, services, and UI components. It defines the structure of pages, routing, and high-level application logic, ensuring that the modules work together smoothly.

- Presentation: The Presentation layer is focused purely on rendering visual components. It includes reusable UI elements, global styles, and formatting logic. By keeping it decoupled from business logic, it ensures that components are modular and reusable.

- Infrastructure: This layer is responsible for the environment setup and build processes, housing configuration files for tools like Webpack, TypeScript, Docker, and linters. It provides the foundation for the app to run and be bundled, without handling application-specific logic.

- Services: Responsible for handling asynchronous operations and external communications, Services manages API calls, authentication, and interactions with external services. It decouples service interactions from the rest of the system and ensures clean API logic, as well as service-specific configurations.

-----
##Why go back to monolithic clients?

With the rise of smaller development teams, driven by the decreasing cost of coding through productivity tools and AI assistants, there is growing pressure to revert to monolithic client architectures. It is important to remember that microfrontends address organizational challenges rather than technical ones. They are designed to decouple deployment cycles from organizational structures and delivery pipelines, offering little advantage for solo or small teams, who are better off working with the same versions in a single repository.

For smaller teams, managing microfrontends often introduces unnecessary overhead and complexity. Modern tools that enhance productivity and performance now enable the creation of efficient, scalable monolithic clients, which simplify workflows, reduce complexity, and shorten development cycles.
