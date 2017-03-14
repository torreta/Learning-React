
Some React-native components require specific parameters, like ListView requires a datasource to work as a component. be wary, most of errors happens because those requisites arent met.

understanding import and require structure are vital to make this all work.

seems like after adding something with `rnpm link` is recommended to rebuid / restart, since the cache sometimes messes up.
(that specially true when adding fonts, time lost here bro...)


navigator element works like a stack, it can stack states and you can pop them at will in a touchable, if it fits you (like the implementation of a 'back' button)


its important, to understand props and states, setState will re-render the view automatically.

props states and variables, should be initialized, if you will load something later on props (after an API call or something), you should leave in the constructor something to mark you will be loading data later there.

well, some components are specially easy because they dont take a lot of parameters, or just need a bare minimun to work, BUT, the catch here is that yo need sometimes develop the behavior the component will have, in my case, learnt that the hard way with the MapView, seems simple, its simple, but you got to learn how to use it well.