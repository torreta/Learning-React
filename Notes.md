
Some React-native components require specific parameters, like ListView requires a datasource to work as a component. be wary most of errors happens because those requisites arent met.

understanding import and require structure are vital to make this all work.

seems like after adding something with `rnpm link` is recommended to rebuid / restart, since the cache sometimes messes up.
(that specially true when adding fonts, time lost here bro...)


navigator element works like a stack, it can stack states and then you can pop them at will in a touchable if it fits you (back buthe implementation of a back button)