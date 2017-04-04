
Some React-native components require specific parameters, like ListView requires a datasource to work as a component. be wary, most of errors happens because those requisites arent met.

understanding import and require structure are vital to make this all work.

seems like after adding something with `rnpm link` is recommended to rebuid / restart, since the cache sometimes messes up.
(that specially true when adding fonts, time lost here bro...)


navigator element works like a stack, it can stack states and you can pop them at will in a touchable, if it fits you (like the implementation of a 'back' button)


its important, to understand props and states, setState will re-render the view automatically.

props states and variables, should be initialized, if you will load something later on props (after an API call or something), you should leave in the constructor something to mark you will be loading data later there.

well, some components are specially easy because they dont take a lot of parameters, or just need a bare minimun to work, BUT, the catch here is that yo need sometimes develop the behavior the component will have, in my case, learnt that the hard way with the MapView, seems simple, its simple, but you got to learn how to use it well.

MapView, was deprecated, so i went with the recommended component proposed by the devs of react `npm install react-native-maps --save`,
requires install and link `react-native link react-native-maps`, and yep, you should restart the device and rebuåild.


seems like required a git upgrade of native-react
`npm install -g react-native-git-upgrade`

those maps came from https://github.com/airbnb/react-native-maps
on that page they tell you about cocoapods and how to install,
we require those dependencies, else maps wont work,
you can follow these instructions:
        https://www.youtube.com/watch?v=eT8SssHz0nY

actually, it worked this way:
    https://www.slideshare.net/kobkrit/reactnative-tutorial-map


i made a separate branch for ios and android, turns out, it wasnt necesary... react-native provides you with 2 indexes for a reason,
what you can do is make folders for very special components that may need be rewritten for both builds


oh, didnt know you could make transparency with the opacity atribute on rbga colors, its a neat trick. worth noting

not even images will load from not https:// sources, since they require the ios Exeption to load


the lodash trim can erase specific caracters if specified


sometime i will need to change the icon for the app

https://blog.bam.tech/developper-news/how-to-generate-your-react-native-app-icons-in-a-single-command-line

likewise, the android splash screen:

https://plus.google.com/+AndroidDevelopers/posts/Z1Wwainpjhd

and the guide for the ios splash screen:

http://stackoverflow.com/questions/34027270/ios-launch-screen-in-react-native


oh, the icons where made here, pretty simple, awesome tool

https://makeappicon.com/


ok, now im trying to put push notifications to my app,
pretty much made throught this guide:

https://www.youtube.com/watch?v=TQmudJLhPx8
https://github.com/zo0r/react-native-push-notification
(is worth noting that i just made the steps for ios)

so i had to delete a tabbar item (showUser) because after 5 tabs, the app starts to show the "more" button instead of the simple icon, everytime i touched the "more" button the app closed.

to put there soon:
https://www.github.com/yelled3/react-native-grid-example/


