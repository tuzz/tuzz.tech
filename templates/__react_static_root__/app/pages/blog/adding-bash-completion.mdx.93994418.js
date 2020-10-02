(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{159:function(e,t,n){"use strict";var a=n(6),o=n.n(a),i=n(24),r=n.n(i),c=n(7),l=n.n(c),s=n(160),p=n.n(s),b=function(e){var t=e.children,n=e.href,a=e.className,o=l()(t,2),i=o[0],r=o[1],c=n?React.createElement("a",{href:n,target:"_blank"},i):i;return React.createElement("figure",{className:"".concat(a," ").concat(p.a.figure)},c,React.createElement("figcaption",null,React.createElement("span",{className:p.a.arrow},"▲"),React.createElement("span",null,r)))};b.Video=function(e){var t=e.children,n=e.href,a=e.src,i=r()(e,["children","href","src"]);return React.createElement(b,o()({href:n||a},i),React.createElement("video",{muted:!0,autoPlay:!0,playsInline:!0,loop:!0},React.createElement("source",{src:a,type:"video/mp4"})),t)},b.Image=function(e){var t=e.children,n=e.href,a=e.src,i=e.alt,c=r()(e,["children","href","src","alt"]);return React.createElement(b,o()({href:n||a},c),React.createElement("img",{src:a,alt:i}),t)},t.a=b},160:function(e,t,n){e.exports={figure:"styles-figure_23Vi",arrow:"styles-arrow_2C7-"}},69:function(e,t,n){"use strict";n.r(t),n.d(t,"r",(function(){return a})),n.d(t,"title",(function(){return f})),n.d(t,"path",(function(){return O})),n.d(t,"type",(function(){return j})),n.d(t,"description",(function(){return y})),n.d(t,"keywords",(function(){return g})),n.d(t,"image",(function(){return w})),n.d(t,"video",(function(){return v})),n.d(t,"date",(function(){return N})),n.d(t,"default",(function(){return T}));var a,o=n(6),i=n.n(o),r=n(24),c=n.n(r),l=(n(0),n(25)),s=n(161),p=n(162),b=n(163),m=n(67),d=n(164),h=n(165),u=n(159),f="Adding Bash completion to my tool",O="/blog/adding-bash-completion",j="article",y="In this second article on Bash completion, we’ll see to apply it to a real-world use case: The tuzz automation tool.",g="Chris Patuzzo,Bash,Ruby,completion,auto-completion,complete,auto-complete,behaviour",w={path:"/images/zz-completion.gif",width:1012,height:480,bytes:165186,type:"image/gif"},v={path:"/videos/zz-completion.mp4",width:1362,height:646,bytes:89935,type:"video/mp4"},N="2019-10-06T12:01Z",z={r:a,title:f};function T(e){var t=e.components,n=c()(e,["components"]);return Object(l.b)("wrapper",i()({},z,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)(b.a,i()({title:f,path:O,type:j,description:y,keywords:g,image:w,video:v},{mdxType:"MetaTags"})),Object(l.b)(m.a,{previous:s.howBashCompletionWorks,next:s.palindromicSuperpermutations,mdxType:"NavBar"}),Object(l.b)("title",null,f),Object(l.b)("h1",null,f),Object(l.b)("time",{dateTime:N},"Published ",Object(p.a)(N)," by "," ",Object(l.b)("a",{href:"https://twitter.com/chrispatuzzo"},"Chris Patuzzo"),Object(l.b)(d.a,{mdxType:"FeedIcon"})),Object(l.b)("span",{ref:a=createRef()}),Object(l.b)("div",{className:"note"},"This is the second of two parts on Bash completion. Part one is ",Object(l.b)("a",{href:"/blog/how-bash-completion-works"},"here"),"."),Object(l.b)(u.a.Video,{src:"/videos/zz-completion.mp4",className:"more_space"},"A reminder of what we’re trying to achieve"),Object(l.b)("p",null,"In part one we looked at the basic mechanics of Bash completion. In this part\nwe’ll walk through its implementation for my automation tool."),Object(l.b)(h.a,{target:a,mdxType:"Aside"},Object(l.b)("p",null,"A quick refresher on part one:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"The ",Object(l.b)("inlineCode",{parentName:"li"},"complete")," command lets us get/set completion functions"),Object(l.b)("li",{parentName:"ul"},"These functions communicate via environment variables"),Object(l.b)("li",{parentName:"ul"},"Completion kicks in when we hit ",Object(l.b)("inlineCode",{parentName:"li"},"<TAB>")," on the command-line"))),Object(l.b)("p",null,"Recap: My tool is called ",Object(l.b)("inlineCode",{parentName:"p"},"zz")," and I use it every day for routine tasks like\nprovisioning my machine and generating project templates. The animation above\nshows some example use cases of Bash completion, e.g. completing ",Object(l.b)("inlineCode",{parentName:"p"},"zz pr")," to ",Object(l.b)("inlineCode",{parentName:"p"},"zz\nprovision"),"."),Object(l.b)("h2",null,"The ‘zz’ completion function"),Object(l.b)("p",null,"I ",Object(l.b)("span",{ref:a=createRef()},"added")," Bash completion support in ",Object(l.b)("a",i()({parentName:"p"},{href:"https://github.com/tuzz/zz/commit/c7c90d292a19d2c880c9bac6b50e3d1f0ccfc414"}),"this\ncommit"),"."),Object(l.b)(h.a,{target:a,mdxType:"Aside"},Object(l.b)("p",null,"This article is more Ruby-specific and walks through my commits.")),Object(l.b)("p",null,"First, I register a completion function that passes the entire command line\nthrough to another ",Object(l.b)("inlineCode",{parentName:"p"},"zz")," command. Then ",Object(l.b)("inlineCode",{parentName:"p"},"$COMPREPLY")," is set to the result of that\ncommand:"),Object(l.b)(u.a,{mdxType:"Figure"},Object(l.b)("pre",null,Object(l.b)("code",i()({parentName:"pre"},{className:"language-bash"}),"#!/bin/bash\n\nfunction _zz () {\n  COMPREPLY=($(zz complete $COMP_LINE));\n};\n\ncomplete -F _zz zz\n")),Object(l.b)("p",null,"Setting a Bash function to complete ",Object(l.b)("inlineCode",{parentName:"p"},"zz"))),Object(l.b)("p",null,"My philosophy with these things is to ‘get the hell out of ",Object(l.b)("inlineCode",{parentName:"p"},"<OBSCURE THING>"),"’\nas soon as possible and handle the result in a more ",Object(l.b)("span",{ref:a=createRef()},"conventional")," way. In this case, I want to use my trusty\nfriend ",Object(l.b)("em",{parentName:"p"},"Ruby")," to determine the list of completions. This may as well be ",Object(l.b)("em",{parentName:"p"},"just\nanother")," ",Object(l.b)("inlineCode",{parentName:"p"},"zz")," command since I’ll need access to the tool’s context."),Object(l.b)(h.a,{target:a,mdxType:"Aside"},Object(l.b)("p",null,"e.g. I do the same with ",Object(l.b)("a",i()({parentName:"p"},{href:"https://ruby.github.io/rake/doc/rakefile_rdoc.html"}),"Rakefiles"))),Object(l.b)("p",null,"The ",Object(l.b)("span",{ref:a=createRef()},"file")," is written to\n",Object(l.b)("inlineCode",{parentName:"p"},"/usr/local/bin/zz-completion.bash")," and I source it in my ",Object(l.b)("inlineCode",{parentName:"p"},"~/.profile"),". I’m\nactually using ",Object(l.b)("inlineCode",{parentName:"p"},"zz provision")," to ensure this file exists and that it’s sourced.\nNow on to the tool-specific behaviour","…"),Object(l.b)(h.a,{target:a,mdxType:"Aside"},Object(l.b)("p",null,"I’m particularly fond of this kind of ‘bootstrapping’ since it pushes the tool in to the realms of self-reference.")),Object(l.b)("h2",null,"Completing command names"),Object(l.b)("p",null,"My ",Object(l.b)("span",{ref:a=createRef()},"first")," goal is to implement completion for\ncommands and options. The idea being, if I type ",Object(l.b)("inlineCode",{parentName:"p"},"zz prov")," that should complete\nto ",Object(l.b)("inlineCode",{parentName:"p"},"zz provision")," and if I type ",Object(l.b)("inlineCode",{parentName:"p"},"zz <TAB><TAB>"),", it should provide a friendly\nreminder of all available commands."),Object(l.b)(h.a,{target:a,mdxType:"Aside"},Object(l.b)("p",null,"How it should work is somewhat arbitrary, but this behaviour seems most intuitive to me.")),Object(l.b)("p",null,"The same goes for options. If I type ",Object(l.b)("inlineCode",{parentName:"p"},"zz provision --li<TAB>"),", I’d like that to\ncomplete to ",Object(l.b)("inlineCode",{parentName:"p"},"zz provision --list")," and ",Object(l.b)("inlineCode",{parentName:"p"},"zz provision --<TAB><TAB>")," would\nremind me of options for the ",Object(l.b)("inlineCode",{parentName:"p"},"provision")," command."),Object(l.b)("p",null,"This ",Object(l.b)("span",{ref:a=createRef()},"behaviour")," is implemented in\n",Object(l.b)("a",i()({parentName:"p"},{href:"https://github.com/tuzz/zz/commit/046b31d5715661329da8f25eef37de2596a2e59e"}),"this commit"),"."),Object(l.b)(h.a,{target:a,mdxType:"Aside"},Object(l.b)("p",null,"It’s probably easier to look at the tests rather than the implementation.")),Object(l.b)("p",null,"It gets complicated and I could have simplified further. I’m happy it’s\ntested and can be refactored later if needs be. I decided to split the code up\nby the ‘type’ of completion, i.e. whether it’s the name of a command, an\noption, or its ",Object(l.b)("span",{ref:a=createRef()},"arguments"),"."),Object(l.b)(h.a,{target:a,mdxType:"Aside"},Object(l.b)("p",null,"More on this later.")),Object(l.b)("p",null,"For each type of completion, I defined a method that takes ",Object(l.b)("inlineCode",{parentName:"p"},"args")," which is the\nfull command-line typed by the user as an array of words. The method returns\nstrings which are fed back as the completion options:"),Object(l.b)("pre",null,Object(l.b)("code",i()({parentName:"pre"},{className:"language-ruby"}),"def complete_command(args)\n  commands = filter_commands(args)\n  # ...\n  commands.map(&:name)\nend\n")),Object(l.b)("span",{ref:a=createRef()}),Object(l.b)("p",null,"I made it so these methods can return ",Object(l.b)("inlineCode",{parentName:"p"},"false")," if this type of completion isn’t\nrelevant. For example, if the user has already typed ",Object(l.b)("inlineCode",{parentName:"p"},"provision")," (a command), it\ndoesn’t make sense to complete the name of a command since we already have that:"),Object(l.b)(h.a,{target:a,mdxType:"Aside"},Object(l.b)("p",null,"That means we can or (",Object(l.b)("inlineCode",{parentName:"p"},"||"),") all our completion methods together to find the\nfirst one that’s ‘relevant’."),Object(l.b)("p",null,"This behaviour is implemented\n",Object(l.b)("a",i()({parentName:"p"},{href:"https://github.com/tuzz/zz/commit/046b31d5715661329da8f25eef37de2596a2e59e#diff-c536662908a26a0b8843e81b8ffe42cbR5"}),"here"),".")),Object(l.b)(u.a,{mdxType:"Figure"},Object(l.b)("pre",null,Object(l.b)("code",i()({parentName:"pre"},{className:"language-ruby"}),"def complete_command(args)\n  commands = filter_commands(args)\n\n  return false if args.size > 2\n  return false if exact_command_match?(commands, args)\n\n  commands.map(&:name)\nend\n")),Object(l.b)("p",null,"Returning ",Object(l.b)("inlineCode",{parentName:"p"},"false")," if this ‘type’ of completion isn’t relevant")),Object(l.b)("p",null,"The ",Object(l.b)("a",i()({parentName:"p"},{href:"https://github.com/tuzz/zz/commit/046b31d5715661329da8f25eef37de2596a2e59e#diff-c536662908a26a0b8843e81b8ffe42cbR40-R55"}),Object(l.b)("inlineCode",{parentName:"a"},"#complete_option")),"\nmethod is more complicated but uses the same idea."),Object(l.b)("h2",null,"Completing option arguments"),Object(l.b)("p",null,"The final piece of the puzzle is to do contextual completion for options.\nMy original use-case was to complete ",Object(l.b)("inlineCode",{parentName:"p"},"zz secret --read amaz")," to ",Object(l.b)("inlineCode",{parentName:"p"},"zz secret\n--read amazon/")," which means we need to produce different completions per option."),Object(l.b)("p",null,"Conceptually, it would be nice if ",Object(l.b)("inlineCode",{parentName:"p"},"--read")," were ‘responsible’ for\ndetermining its list of completions. Perhaps it looks at the file system or\n",Object(l.b)("a",i()({parentName:"p"},{href:"https://www.vaultproject.io/"}),"Hashicorp’s Vault")," to decide."),Object(l.b)("p",null,"I haven’t ",Object(l.b)("span",{ref:a=createRef()},"implemented")," the ",Object(l.b)("inlineCode",{parentName:"p"},"secret")," command\nyet, but I can still do some ground work for completion now. ",Object(l.b)("a",i()({parentName:"p"},{href:"https://github.com/tuzz/zz/commit/fddbf52238d3e4ab490750f08148b98a6d20b8d1"}),"This\ncommit"),"\nimplements ",Object(l.b)("inlineCode",{parentName:"p"},"#complete_option_arg")," which delegates to a Ruby ",Object(l.b)("inlineCode",{parentName:"p"},"proc")," that can be\nset on an ",Object(l.b)("inlineCode",{parentName:"p"},"Option"),"."),Object(l.b)(h.a,{target:a,mdxType:"Aside"},Object(l.b)("p",null,"The details here don’t matter. The key is to make ",Object(l.b)("inlineCode",{parentName:"p"},"Option")," responsible for\nproducing its completions.")),Object(l.b)("p",null,"We ",Object(l.b)("span",{ref:a=createRef()},"can")," now implement completion for options\nby providing them with blocks. For example, here’s how we do that for ",Object(l.b)("inlineCode",{parentName:"p"},"template\n--type"),":"),Object(l.b)(u.a,{mdxType:"Figure"},Object(l.b)("pre",null,Object(l.b)("code",i()({parentName:"pre"},{className:"language-ruby"}),'def type_option\n  help = "sets the type of template (e.g. ruby)"\n\n  @type_option ||= Option.new("t", "type", 1, help) do |args|\n    types.select { |t| t.start_with?(args.last) }\n  end\nend\n')),Object(l.b)("p",null,"Selecting all types that start with the prefix")),Object(l.b)(h.a,{target:a,mdxType:"Aside"},Object(l.b)("p",null,"At time of writing, valid template ‘types’ are ",Object(l.b)("inlineCode",{parentName:"p"},"ruby"),", ",Object(l.b)("inlineCode",{parentName:"p"},"rust")," and ",Object(l.b)("inlineCode",{parentName:"p"},"cpp"),".")),Object(l.b)("p",null,"The block receives all command-line arguments and returns an array of completion\nstrings. In this case, we find all template types that start with the last\nargument on the command-line, so if the user types ",Object(l.b)("inlineCode",{parentName:"p"},"template --type ru"),", it\nselects ",Object(l.b)("inlineCode",{parentName:"p"},"ruby")," and ",Object(l.b)("inlineCode",{parentName:"p"},"rust"),"."),Object(l.b)("p",null,"A more complicated example is the ",Object(l.b)("inlineCode",{parentName:"p"},"provision --only")," option which accepts a list\nof Chef recipes. For example, you might say ",Object(l.b)("inlineCode",{parentName:"p"},"provision --only vim,ruby"),"."),Object(l.b)("span",{ref:a=createRef()}),Object(l.b)(u.a,{mdxType:"Figure"},Object(l.b)("pre",null,Object(l.b)("code",i()({parentName:"pre"},{className:"language-ruby"}),'def auto_complete_recipe_list(args)\n  *head, prefix = args.last.downcase.split(",")\n  list = recipes.select { |r| r.start_with?(prefix || "") }\n\n  return recipes if list == [prefix]\n\n  list.map { |l| (head + [l]).join(",") }\nend\n')),Object(l.b)("p",null,"An option that completes comma-separated lists")),Object(l.b)(h.a,{target:a,moveDown:55,mdxType:"Aside"},Object(l.b)("p",null,"Implemented in ",Object(l.b)("a",i()({parentName:"p"},{href:"https://github.com/tuzz/zz/commit/62dbff256963d8ff0a8e23f54e0b5969fd277ba5"}),"this commit"),"."),Object(l.b)("p",null,"That mysterious ",Object(l.b)("inlineCode",{parentName:"p"},"return")," statement is explained below.")),Object(l.b)("h3",null,"A few ‘gotchas’"),Object(l.b)("p",null,"Bash sometimes tries to be ",Object(l.b)("span",{ref:a=createRef()},"helpful")," which can\noften lead to surprising behaviour. For example, if all available completions\nstart with the same prefix, Bash replaces the word at the end of the\ncommand-line with that prefix."),Object(l.b)(h.a,{target:a,mdxType:"Aside"},Object(l.b)("p",null,"e.g. if we returned ",Object(l.b)("inlineCode",{parentName:"p"},"ruby")," and ",Object(l.b)("inlineCode",{parentName:"p"},"rust")," as our completions, Bash would replace the\nlast word with ‘",Object(l.b)("inlineCode",{parentName:"p"},"ru"),"’ since that’s the common prefix.")),Object(l.b)("p",null,"That’s why we have to copy the list into each completion:"),Object(l.b)("span",{ref:a=createRef()}),Object(l.b)("pre",null,Object(l.b)("code",i()({parentName:"pre"},{className:"language-bash"}),"$ zz provision --only vim,ru<TAB><TAB>\nvim,ruby  vim,rust\n")),Object(l.b)(h.a,{target:a,mdxType:"Aside"},Object(l.b)("p",null,"Otherwise, we’d lose ",Object(l.b)("inlineCode",{parentName:"p"},"vim")," from our list if it was replaced with just ‘",Object(l.b)("inlineCode",{parentName:"p"},"ru"),"’.")),Object(l.b)("p",null,"However, this can be noisy if we have lots of completion options:"),Object(l.b)(u.a,{mdxType:"Figure"},Object(l.b)("pre",null,Object(l.b)("code",i()({parentName:"pre"},{className:"language-bash"}),"$ zz provision --only vim,ruby<TAB><TAB>\nvim,ruby,aws   vim,ruby,chrome   vim,ruby,dock   # ...many more\n")),Object(l.b)("p",null,"Noisy output: the comma-separated list is duplicated")),Object(l.b)("p",null,"Ideally, we want it to just return the names of available recipes without all\nthe noise but we can’t do that because Bash will replace our list by the common\nprefix. In this situation, Bash’s helpfulness has backfired and results in more\nnoise than we’d like."),Object(l.b)("h3",null,"Fighting back"),Object(l.b)("p",null,"Knowledge is ",Object(l.b)("span",{ref:a=createRef()},"power")," and it so happens there’s\nthis ",Object(l.b)("em",{parentName:"p"},"one weird trick")," we can use to get around the problem. Since we know Bash\nwill only do the ‘wrong’ thing if there’s a common prefix, we can check for\nthat and return a clutter-free list when there isn’t:"),Object(l.b)(h.a,{target:a,moveDown:10,mdxType:"Aside"},Object(l.b)("p",null,"Arguably, this approach could be brittle if small changes are made to how Bash\ncompletion works, but I don’t see that happening soon."),Object(l.b)("p",null,"It might also vary by operating system or version, I’m not sure.")),Object(l.b)(u.a,{mdxType:"Figure"},Object(l.b)("pre",null,Object(l.b)("code",i()({parentName:"pre"},{className:"language-bash"}),"$ zz provision --only vim,ruby<TAB><TAB>\naws   chrome   dock   drive   dropbox   ffmpeg   # ...\n")),Object(l.b)("p",null,"Less noisy output: without the duplication")),Object(l.b)("p",null,"That’s what this lines is for:"),Object(l.b)("span",{ref:a=createRef()}),Object(l.b)("pre",null,Object(l.b)("code",i()({parentName:"pre"},{className:"language-ruby"}),"return recipes if list == [prefix]\n")),Object(l.b)(h.a,{target:a,mdxType:"Aside"},Object(l.b)("p",null,"It’s might be useful to refer back to ",Object(l.b)("inlineCode",{parentName:"p"},"#auto_complete_recipe_list"),", but I had to\nstare at this for several minutes to remember how it works.")),Object(l.b)("p",null,"My implementation’s a bit simpler in that it just checks for an exact match\nbetween the prefix and the filtered list of recipes. This has the desired\neffect because completing ",Object(l.b)("inlineCode",{parentName:"p"},"vim,ruby")," or ",Object(l.b)("inlineCode",{parentName:"p"},"vim,")," now displays the full list of\nrecipes."),Object(l.b)("p",null,"This could be smarter and check for a ‘common prefix’ more directly, but it’s\nalready complicated. Here are some unit test for this behaviour:"),Object(l.b)("span",{ref:a=createRef()}),Object(l.b)(u.a,{mdxType:"Figure"},Object(l.b)("pre",null,Object(l.b)("code",i()({parentName:"pre"},{className:"language-ruby"}),'expect(complete.call([""])).to include("git", "ruby", "vim")\nexpect(complete.call(["ru"])).to eq ["ruby", "rust"]\nexpect(complete.call(["VI"])).to eq ["vim", "virtualbox"]\n\nexpect(complete.call(["x"])).to eq []\nexpect(complete.call(["ruby"])).to include("git", "ruby", "vim")\n\n# Although this exact-matches, there are other options:\nexpect(complete.call(["Chrome"])).to eq ["chrome", "chromedriver"]\n\n# ...\n')),Object(l.b)("p",null,"Unit tests for ",Object(l.b)("inlineCode",{parentName:"p"},"provision --only")," option completion")),Object(l.b)(h.a,{target:a,moveDown:45,mdxType:"Aside"},Object(l.b)("p",null,"I also automatically downcase the user-input in case I’m feeling overly\npedantic and want to use proper nouns, e.g. ",Object(l.b)("inlineCode",{parentName:"p"},"Vim,Ruby"))),Object(l.b)("h2",null,"Closing remarks"),Object(l.b)("p",null,"It’s been fun to understand the mechanics of feature we often don’t think about.\nBash completion adds a friendly touch that can make our command-line tools\neasier to use through back-and-forth interactions with the user."),Object(l.b)("p",null,"I think we should ",Object(l.b)("span",{ref:a=createRef()},"consider")," completion\nfeatures in the context of user experience, accessibility and interface design.\nWe should strive to build completion behaviours that help users navigate our\ntools and discover features."),Object(l.b)(h.a,{target:a,mdxType:"Aside"},Object(l.b)("p",null,"I’m not saying it’ll make things drastically better, but it all adds up.")),Object(l.b)("p",null,"For those implementing this behaviour, it’s helpful to know we can ‘escape’ out\nto our favourite programming languages without too much difficulty. This blog\npost has been about Bash because that’s what I use, but the concepts should be\napplicable wherever it’s implemented - though the mechanics will be different."),Object(l.b)("p",null,"Finally, ",Object(l.b)("span",{ref:a=createRef()},"I’d")," be interested to hear if you\ncome up with some novel way to use completion. ",Object(l.b)("a",i()({parentName:"p"},{href:"https://twitter.com/chrispatuzzo"}),"Tweet at\nme")," if you write your own choose-your-own\nadventure game with it, or some wacky chess program."),Object(l.b)(h.a,{target:a,mdxType:"Aside"},Object(l.b)("p",null,"Or have your completion function tweet at me with the contents of your current command-line.")),Object(l.b)("p",null,"Happy completi",Object(l.b)("inlineCode",{parentName:"p"},"<TAB><TAB>")),Object(l.b)(m.a,{previous:s.howBashCompletionWorks,next:s.palindromicSuperpermutations,mdxType:"NavBar"}))}T.isMDXComponent=!0}}]);