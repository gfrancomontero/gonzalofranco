const projects = [
  {
    "position": 2,
    "title": "Proving Benford's Law",
    "cover": "/benford.png",
    "github": "https://github.com/gfrancomontero/benfordslaw",
    "external": "https://github.com/gfrancomontero/benfordslaw",
    "tech": ["Ruby", "Python", "Solidity"],
    "description": [
      "I wrote a model that demonstrates Benford's Law.",
      "Benford's Law doesn't apply to data extracted from a specific range, as the maximum number in the dataset must be undetermined or infinite.",
      "For example, if a number generator extracts from a set range like 1-100, the first digit distribution will be uniform.",
      "However, when a computer or nature decides the range randomly each time, the dataset adheres to Benford's Law.",
      "I have written easy-to-understand code that proves that Benford's Law consistently holds true for randomly chosen numbers of randomly decided lengths."
    ]
  },
  {
    "position": 4,
    "title": "The Lorenz System (Butterfly Effect)",
    "cover": "/lorenzsystem.png",
    "github": "https://github.com/yourusername/lorenz-system",
    "external": "https://github.com/yourusername/lorenz-system",
    "tech": ["Ruby", "Gnuplot"],
    "description": [
      "The Butterfly Effect is a concept in chaos theory that describes how small changes in initial conditions can lead to vastly different outcomes in complex systems.",
      "I wrote a simulation of the Lorenz System to demonstrate the Butterfly Effect.",
      "The Lorenz System is a set of differential equations that model atmospheric convection (basically how heat moves in the atmosphere) and exhibit chaotic behavior.",
      "I used the Runge-Kutta method to solve the equations numerically, which is a common technique for solving ordinary differential equations.",
      "The simulation shows how two trajectories with very very slightly different initial conditions diverge over time, illustrating the sensitivity to initial conditions.",
      "The output is visualized using Gnuplot, creating a plot that highlights the chaotic nature of the Lorenz Attractor."
    ]
  },
  {
    "position": 6,
    "title": "WordPress Plugin",
    "cover": "/plugin.png",
    "external": "https://wordpress.org/plugins/openbroker/",
    "cta": "https://wordpress.org/plugins/openbroker/",
    "tech": ["PHP", "GraphQL", "WordPress"],
    "description": [
      "A WordPress plugin that allows major themes (like Elementor) to pull houses from the OpenBroker MLS API and create No-code Real Estate Websites."
    ]
  }
];

export default projects;

const notInUse=[
  {
    "position": 3,
    "title": "Carling Petri",
    "cover": "/carlingpetri.png",
    "external": "https://www.carlingpetri.com",
    "cta": "https://www.carlingpetri.com",
    "tech": ["NextJS", "Node.JS", "Sendgrid API"],
    "description": [
      "Another of the many OpenBroker powered Real Estate websites.",
      "This one using a Restful API."
    ]
  },
  {
    "position": 1,
    "title": "Elliott James",
    "cover": "/elliottjames.png",
    "github": "https://github.com/gfrancomontero/halcyon-site",
    "external": "https://www.elliottjames.es/",
    "tech": ["Ruby on Rails", "Hotwire", "Stimulus", "Tailwind"],
    "description": [
      "A real estate application pulling data from OpenBroker's API.",
      "Minimal, engaging, and visited by tens of thousands of users per day."
    ]
  }
]
