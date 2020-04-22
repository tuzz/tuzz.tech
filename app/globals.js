import React, { createRef, isValidElement, useEffect, useRef, useState } from "react";
import { Children, ReactNode, ReactText } from "react";
import { Head } from "react-static";
import dedent from "dedent";

global.React = React;
global.createRef = createRef;
global.isValidElement = isValidElement;
global.useEffect = useEffect;
global.useRef = useRef;
global.useState = useState;
global.Children = Children;
global.ReactNode = ReactNode;
global.ReactText = ReactText;
global.Head = Head;
global.dedent = dedent;

import useAudio from "./hooks/use_audio";
import useDebounce from "./hooks/use_debounce";
import useDelays from "./hooks/use_delays";
import usePrint from "./hooks/use_print";
import useResize from "./hooks/use_resize";

global.useAudio = useAudio;
global.useDebounce = useDebounce;
global.useDelays = useDelays;
global.usePrint = usePrint;
global.useResize = useResize;
