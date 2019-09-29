import Layout from "../../components/layout";

const Happy100th = () => (
  <Layout>
    <h1>Happy 100th, tuzz! &nbsp;🎉</h1>

    <time dateTime="2019-09-29" pubdate="pubdate">
      Published September 29, 2019 by {" "}
      <a href="https://twitter.com/chrispatuzzo" target="_blank">Chris Patuzzo</a>
    </time>

    <p>
    No, I'm not 100 years old. This blog marks my 100th personal repository on
    GitHub. An arbitrary milestone that bears no real significance other than as
    testament to my endless tinkering, insatiable curiosity and belief that
    making things is perhaps the best way to really understand something.
    </p>

    <aside className="raise-5-lines">
      <p>
      Technically, only 93 are public. Legend has it, the remaining seven
      contain code so horrifying those who glance at it turn to stone.
      </p>
    </aside>

    <p><em>
    And yet, in all that time, why haven't I blogged about it?
    </em></p>

    <p>
    Those sleepless nights my brain won't switch off, exploring the twisting
    avenues on some project. The occasions I'm frantically scribbling away,
    working through the minutiae of an esoteric problem. Or the intense lucidity
    and feeling of purpose that arises from programming for hours at a time.
    </p>

    <aside className="raise-2-lines">
      <p>It's either that or the coffee.</p>
    </aside>

    <p>
    It saddens me how much of this is lost to my own fleshy forgetfulness. A
    failure to document and share outwardly what's going on between my ears.
    Sure, I've written some {" "}
    <a href="https://github.com/tuzz/supersat" target="_blank">extraordinarily long READMEs</a>,
    {" "} but I'm kidding myself
    if anyone will discover and engage with material of that formality.
    </p>

    <p>
    Well change is happening. Our climate is dying and no longer will I allow
    apathy to deter me from writing. I will not convince myself I cannot write
    or that it's unimportant to me. The resistance is strong but I will work
    through the drudgery to improve my writing ability so I can share what I'm
    doing.
    </p>

    <aside className="raise-5-lines">
      <p>At time of writing, it's the global climate strike.</p>

      <p>
      <i>The resistance</i> is a reference to <br/>
      <a href="https://www.goodreads.com/book/show/1319.The_War_of_Art" target="_blank">The War of Art</a>.
      </p>
    </aside>

    <p><em>
    Why? Because the opportunity costs are too high.
    </em></p>

    <p>
    There are so many brilliant, clever and inspiring people in this world and
    here I am, working mostly in isolation on things I genuinely think would be
    captivating and interesting to a number of people. In return, I'd be
    grateful for their wisdom, insight and opportunities to collaborate in
    crafting something broader in scope than I can alone.
    </p>

    <aside className="raise-4-lines">
      <p>Or just their attention, really. To feed my narcissism.</p>
    </aside>

    <p>
    More than that, I believe in the Internet's ability to bring people
    together with similar interests. Forging communities that transcend
    geography and time. Communities that simply couldn't exist otherwise. I want
    to play a part in that. I think I'd benefit from crawling out from under my
    rock once in a while.
    </p>

    <p><em>
    So here I am, muddy and regretful yet optimistic about the future.
    </em></p>

    <aside className="raise-2-lines">
      <p>I'm not actually muddy.</p>
    </aside>

    <p>
    I have a multitude of stories to tell, old and new about things I've built
    and the many curiosities electrifying my brain. Most projects serve no
    purpose other than as acts of creativity or to build a deeper understanding
    of some topic. Usually circling the theme of computer science. Here are some
    examples:
    </p>

    <ul>
      <li>
        <a href="https://tuzz.github.io/twelve_days/bin/" target="_blank">a neural network</a>
        {" "} to classify words from the 'Twelve days of Christmas'
      </li>

      <li>
        <a href="https://tuzz.github.io/game-engine/" target="_blank">a 3D game engine</a>
        {" "} (written in Rust) that runs in your browser
      </li>

      <li>
        <a href="https://sentient-lang.org" target="_blank">a puzzle-solving programming language</a>
        {" "} I spent the best part of a year building
      </li>
    </ul>

    <aside className="raise-5-lines">
      <p>
      I spent a while deciding what to put here. These are biased towards
      projects with visuals but I work on plenty interesting things where the
      only output is a terminal.
      </p>
    </aside>

    <p>
    This is really just the tip of the iceberg. There's plenty of substance
    beyond the shiny demos and visual delights. What's more, I have a keen
    interest in the act of programming itself. Writing aesthetically pleasing
    code. Playing with various paradigms and architectures. Not that I claim to
    know what on earth I'm doing.
    </p>

    <aside className="raise-3-lines">
      <p>
      My game engine, for example, uses an ECS pattern which I learned about in {" "}
      <a href="https://www.youtube.com/watch?v=aKLntZcp27M" target="_blank">this excellent talk</a>
      {" "} by Katherine West.
      </p>
    </aside>

    <p>
    A world of uncertainty awaits. I have innumerable questions and nonsensical
    ideas to pursue. There are hard puzzles and enigmatic problems lurking out
    of sight, conspiring to shut me down and chuckle at my foolish endeavour. I
    cannot wait to meet you.
    </p>
  </Layout>
);

export default Happy100th;
