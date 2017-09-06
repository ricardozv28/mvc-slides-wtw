// Import React
import React from "react";

// Import Spectacle Core tags
import {
  // BlockQuote,
  // Cite,
  Deck,
  Heading,
  ListItem,
  List,
  // Quote,
  Slide,
  Text,
  Appear,
  Image,
  Layout,
  Fill
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

import CodeSlide from "spectacle-code-slide";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png"),
  middleware: require("../assets/request-delegate-pipeline.png"),
  lifecycle: require("../assets/lifecycle.png")
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quartenary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            MVC ASP.NET CORE
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Request Life Cycle
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="quartenary" textColor="tertiary">
          <Heading size={3} textColor="secondary" caps>Why?</Heading>
          <List>
            <Appear><ListItem>Open source cross plataform version of .NET</ListItem></Appear>
            <Appear><ListItem>Understanding a Framework's processing pipeline empowers you as a develper</ListItem></Appear>
            <Appear><ListItem>Debugging</ListItem></Appear>
            <Appear><ListItem>Customization</ListItem></Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={2} textColor="primary" caps>MVC Life Cycle</Heading>
          <Text margin="20px 0 0 0" size={6} bold textColor="secondary">
            A series of events or phases of an application that process a request or response to user interaction
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="quartenary" textColor="tertiary">
          <Heading size={3} textColor="secondary" caps>Life Cicle PipeLine</Heading>
          <List>
            <Appear><ListItem>Request</ListItem></Appear>
            <Appear><ListItem>Middleware</ListItem></Appear>
            <Appear><ListItem>Routing</ListItem></Appear>
            <Appear><ListItem>Controller Initialization</ListItem></Appear>
            <Appear><ListItem>Action Method Execution</ListItem></Appear>
            <Appear><ListItem>Result Execution</ListItem></Appear>
            <Appear><ListItem>Data Result</ListItem></Appear>
            <Appear><ListItem>View Result</ListItem></Appear>
            <Appear><ListItem>Response</ListItem></Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Image src={images.lifecycle} height={600} width={1000} />
          <Text>Source: Pluralsight </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1} textColor="primary" caps>Middleware</Heading>
          <Heading size={5} textColor="secondary">Components that form the request handling pipeline</Heading>
          <Image src={images.middleware} display="inline" margin={10} height={400} width={800} />
        </Slide>
        <CodeSlide
          maxWidth="1150px"
          transition={[]}
          lang="js"
          code={require("raw-loader!..\\assets\\examples\\middleware-inline.example")}
          ranges={[
            { loc: [0, 270], title: "Configuring the Middleware pipeline" },
            { loc: [0, 1], title: "Startup.cs", note: "Configure" },
            { loc: [2, 6], note: "Generate a response and short circuit the request" },
            { loc: [7, 14], note: "Perform logic and send request to next omponent" },
            { loc: [14, 15], note: "Conditionally send the request to other middleware" },
            { loc: [16, 23] }
          ]}
        />
        <CodeSlide
          maxWidth="1150px"
          transition={[]}
          lang="js"
          code={require("raw-loader!..\\assets\\examples\\middleware-base.example")}
          ranges={[
            { loc: [0, 270], title: "Middleware class example" },
            { loc: [0, 1], title: "Custom Middleware class" },
            { loc: [2, 7], note: "Constructor accepting the 'next' middleware delegate" },
            { loc: [8, 15], note: "Invoke method to execute logic" },
            { loc: [17, 18], title: "Startup.cs" },
            { loc: [19, 20], note: "Configure Method" },
            { loc: [21, 22] },
            { loc: [23, 30] }
          ]}
        />
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1} textColor="primary" caps>Routing</Heading>
          <Heading size={5} textColor="secondary">Process that maps an incoming request to Controller Action Method</Heading>
        </Slide>
        <Slide maxWidth="1500px" transition={["zoom", "fade"]} bgColor="primary">
          <Heading caps fit>Types of Routing</Heading>
          <Layout>
            <Fill>
              <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                Conventional Routing
              </Heading>
              <Text size={6} textColor="secondary" bgColor="white" margin="70 30 0 0">
                Uses application patterns to match a URL to a Controller Action Method
              </Text>
            </Fill>
            <Fill>
              <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                Attribute Routing
              </Heading>
              <Text size={6} textColor="secondary" bgColor="white" margin="70 0 0 30">
                Implemented through Attributes applied to a Controller Action Method
              </Text>
            </Fill>
          </Layout>
        </Slide>
        <CodeSlide
          maxWidth="1150px"
          transition={[]}
          lang="js"
          code={require("raw-loader!..\\assets\\examples\\routing.example")}
          ranges={[
            { loc: [0, 270], title: "Routing" },
            { loc: [2, 5] },
            { loc: [6, 11] }
          ]}
        />
        <Slide transition={["fade"]} bgColor="quartenary" textColor="tertiary">
          <Appear><Heading size={2} textColor="secondary" caps>Route Pattern Matching</Heading></Appear>
          <Appear><Text size={2} margin="50 0">Incoming URL: ULR/Task/Edit/23</Text></Appear>
          <Appear><Text size={2}>Matched Route: {"{controller}/{action}/{id?}"}</Text></Appear>
        </Slide>
        <CodeSlide
          maxWidth="1150px"
          transition={[]}
          lang="js"
          code={require("raw-loader!..\\assets\\examples\\route-controller.example")}
          ranges={[
            { loc: [0, 270], title: "Pattern Matching" },
            { loc: [0, 1], note: "{controller} = Taks" },
            { loc: [1, 2], note: "{action} = Edit" },
            { loc: [1, 2], note: "{id?} = id" }
          ]}
        />
        <CodeSlide
          maxWidth="1150px"
          transition={[]}
          lang="js"
          code={require("raw-loader!..\\assets\\examples\\attribute-route.example")}
          ranges={[
            { loc: [0, 270], title: "Attribute Routing" },
            { loc: [0, 1], note: "Controller Attribute Route" },
            { loc: [3, 4], note: "Action Method Attribute Route" }
          ]}
        />
        <CodeSlide
          maxWidth="1150px"
          transition={[]}
          lang="js"
          code={require("raw-loader!..\\assets\\examples\\http-route.example")}
          ranges={[
            { loc: [0, 270], title: "HTTP Verbs" },
            { loc: [2, 3] },
            { loc: [7, 8] }
          ]}
        />
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1} textColor="primary" caps>Controller Initialization</Heading>
          <Heading size={5} textColor="secondary">Defines which Controller will be used to process the request</Heading>
        </Slide>
        <CodeSlide
          maxWidth="1150px"
          transition={[]}
          lang="js"
          code={require("raw-loader!..\\assets\\examples\\controller-initialization.example")}
          ranges={[
            { loc: [0, 270], title: "Controller" },
            { loc: [2, 3] },
            { loc: [6, 7] }
          ]}
        />
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Action Constraints
          </Heading>
        </Slide>
        <CodeSlide
          maxWidth="1150px"
          transition={[]}
          lang="js"
          code={require("raw-loader!..\\assets\\examples\\custom-action-constrain.example")}
          ranges={[
            { loc: [0, 270], title: "Custom action constraint" },
            { loc: [0, 1], note: "IActionConstraint" },
            { loc: [2, 3], note: "Order Method" },
            { loc: [4, 5], note: "Accept Method" },
            { loc: [6, 8] }
          ]}
        />
        <CodeSlide
          maxWidth="1150px"
          transition={[]}
          lang="js"
          code={require("raw-loader!..\\assets\\examples\\action-constrain-implementation.example")}
          ranges={[
            { loc: [0, 270], title: "Implementation" },
            { loc: [2, 3] },
            { loc: [9, 10] },
            { loc: [8, 9], note: "Attribute ActionName" },
            { loc: [7, 8], note: "Custom Action Constraint" }
          ]}
        />
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={3} textColor="primary" caps>Action Methods Execution</Heading>
          <Heading size={5} textColor="secondary">Members of controllers that are responsible for handling a request and generating a response</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="quartenary" textColor="tertiary">
          <Heading size={3} textColor="secondary" caps>Model Binding</Heading>
          <Heading size={5} textColor="secondary">Is the Process of mapping incoming request data to Action Method Paramethers</Heading>
          <Heading size={5} textColor="secondary">Can also be extendted to include data from sources outside of the project</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="quartenary" textColor="tertiary">
          <Heading size={3} textColor="secondary" caps>Type Value Providers</Heading>
          <List>
            <Appear><ListItem>Form Value</ListItem></Appear>
            <Appear><ListItem>Route Data Value</ListItem></Appear>
            <Appear><ListItem>Query string Value</ListItem></Appear>
          </List>
        </Slide>
        <CodeSlide
          maxWidth="1150px"
          transition={[]}
          lang="js"
          code={require("raw-loader!..\\assets\\examples\\modelbinders.example")}
          ranges={[
            { loc: [0, 270], title: "Model Binder Examples" },
            { loc: [0, 1] },
            { loc: [5, 6] }
          ]}
        />
        <Slide transition={["fade"]} bgColor="quartenary" textColor="tertiary">
          <Heading size={3} textColor="secondary" caps>Action Filters</Heading>
          <Heading size={5} textColor="secondary">Filter Types</Heading>
          <List>
            <Appear><ListItem>Action Filters</ListItem></Appear>
            <Appear><ListItem>Authorization Filters</ListItem></Appear>
            <Appear><ListItem>Exception Filters</ListItem></Appear>
            <Appear><ListItem>Result Filters</ListItem></Appear>
          </List>
        </Slide>
        <CodeSlide
          maxWidth="1150px"
          transition={[]}
          lang="js"
          code={require("raw-loader!..\\assets\\examples\\filters-implementation.example")}
          ranges={[
            { loc: [0, 270], title: "Filters as Attribute" },
            { loc: [0, 1], note: "Apply to the whole controller" },
            { loc: [3, 4], note: "Apply to a sinlge Action Method" }
          ]}
        />
        <CodeSlide
          maxWidth="1150px"
          transition={[]}
          lang="js"
          code={require("raw-loader!..\\assets\\examples\\authorizationfilter.example")}
          ranges={[
            { loc: [0, 270], title: "Authorization Filter" },
            { loc: [0, 1], title: "IAuthorizationFilter Interface" },
            { loc: [2, 3], note: "OnAuthorization" },
            { loc: [4, 5] },
            { loc: [6, 7], note: "Short circuit, send an UnauthorizedResult" }
          ]}
        />
        <CodeSlide
          maxWidth="1150px"
          transition={[]}
          lang="js"
          code={require("raw-loader!..\\assets\\examples\\actionfilter.example")}
          ranges={[
            { loc: [0, 270], title: "Action Filter" },
            { loc: [0, 1], title: "IActionFilter Interface" },
            { loc: [2, 6], note: "OnActionExecuting: Before action method execution" },
            { loc: [7, 12], note: "OnActionExecuted: After action method execution" }
          ]}
        />
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={3} textColor="primary" caps>Result Execution</Heading>
          <Heading size={5} textColor="secondary">Action Result</Heading>
          <Text size={2} margin="50 0">Genereate the unique response for the request</Text>
          <Text size={2} margin="50 0">Different Implementation generate different response</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="quartenary" textColor="tertiary">
          <Heading size={5} textColor="secondary">Action Result Types</Heading>
          <List>
            <Appear><ListItem>Content Result</ListItem></Appear>
            <Appear><ListItem>View Result</ListItem></Appear>
            <Appear><ListItem>JSON Result</ListItem></Appear>
            <Appear><ListItem>File Results</ListItem></Appear>
          </List>
        </Slide>
        <CodeSlide
          maxWidth="1150px"
          transition={[]}
          lang="js"
          code={require("raw-loader!..\\assets\\examples\\resultfilter.example")}
          ranges={[
            { loc: [0, 270], title: "Result Filters" },
            { loc: [0, 1], title: "IRestulFilter Interface" },
            { loc: [2, 6], note: "OnResultExecuting: Before result method execution" },
            { loc: [7, 12], note: "OnResultExecuted: After result method execution" }
          ]}
        />
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1} textColor="primary" caps>Content Negociation</Heading>
          <Heading size={5} textColor="secondary">Tell if the request can be process or reject base on the header configuraction</Heading>
        </Slide>
        <CodeSlide
          maxWidth="1150px"
          transition={[]}
          lang="js"
          code={require("raw-loader!..\\assets\\examples\\contentnegotiationoptions.example")}
          ranges={[
            { loc: [0, 270], title: "Startup.cs" },
            { loc: [0, 1], title: "ConfigureServices" },
            { loc: [4, 5], note: "Enable HTTP headers" },
            { loc: [5, 6], note: "Not Acceptable Status" }
          ]}
        />
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1} textColor="primary" caps>View Result</Heading>
          <Heading size={5} textColor="secondary">Views encapsulates the presentation details of the user's interaction with the app.</Heading>
        </Slide>
        <CodeSlide
          maxWidth="1150px"
          transition={[]}
          lang="js"
          code={require("raw-loader!..\\assets\\examples\\razorview.example")}
          ranges={[
            { loc: [0, 270], title: "Razor Views" },
            { loc: [0, 3], note: "C# code block" },
            { loc: [4, 10], note: "Static HTML" },
            { loc: [7, 8], note: "Razor helper method" }
          ]}
        />
        <Slide>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">React</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">Source</Heading>
          <List>
            <ListItem>Pluralsight: ASP.NET Core: The MVC Request Life Cycle</ListItem>
            <ListItem>MVC Core Documentation</ListItem>
          </List>
        </Slide>
      </Deck>
    );
  }
}
