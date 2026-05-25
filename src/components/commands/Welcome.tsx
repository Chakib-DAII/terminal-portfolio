import {
  Cmd,
  HeroContainer,
  Link,
  PreImg,
  PreName,
  PreNameMobile,
  PreWrapper,
  Seperator,
} from "../styles/Welcome.styled";

const Welcome: React.FC = () => {
  return (
    <HeroContainer data-testid="welcome">
      <div className="info-section">
        <PreName>
          {`
 ________  ___  ___  ________  ___  __    ___  ________     
|\\   ____\\|\\  \\|\\  \\|\\   __  \\|\\  \\|\\  \\ |\\  \\|\\   __  \\    
\\ \\  \\___|\\ \\  \\\\\\  \\ \\  \\|\\  \\ \\  \\/  /|\\ \\  \\ \\  \\|\\ /_   
 \\ \\  \\    \\ \\   __  \\ \\   __  \\ \\   ___  \\ \\  \\ \\   __  \\  
  \\ \\  \\____\\ \\  \\ \\  \\ \\  \\ \\  \\ \\  \\\\ \\  \\ \\  \\ \\  \\|\\  \\ 
   \\ \\_______\\ \\__\\ \\__\\ \\__\\ \\__\\ \\__\\\\ \\__\\ \\__\\ \\_______\\
    \\|_______|\\|__|\\|__|\\|__|\\|__|\\|__| \\|__|\\|__|\\|_______|
    
                   ________  ________  ___  ___     
                  |\\   ___ \\|\\   __  \\|\\  \\|\\  \\    
                  \\ \\  \\_|\\ \\ \\  \\|\\  \\ \\  \\ \\  \\   
                   \\ \\  \\ \\\\ \\ \\   __  \\ \\  \\ \\  \\  
                    \\ \\  \\_\\\\ \\ \\  \\ \\  \\ \\  \\ \\  \\ 
                     \\ \\_______\\ \\__\\ \\__\\ \\__\\ \\__\\
                      \\|_______|\\|__|\\|__|\\|__|\\|__|
`}
        </PreName>

        <PreWrapper>
          <PreNameMobile>
            {`
   ________          __   _ __  
  / ____/ /_  ____ _/ /__(_) /_ 
 / /   / __ \\/ __ \`/ //_/ / __ \\
/ /___/ / / / /_/ / ,< / / /_/ /
\\____/_/ /_/\\__,_/_/|_/_/_.___/ 
                                
    ____        _ _ 
   / __ \\____ _(_|_)
  / / / / __ \`/ / / 
 / /_/ / /_/ / / /  
/_____/\\__,_/_/_/ 
`}
          </PreNameMobile>
        </PreWrapper>

        <div>Welcome to my terminal portfolio.</div>

        <Seperator>----</Seperator>

        <div>
          Hi, I’m <Cmd>Chakib Daii</Cmd> — Software Engineer specialized in
          backend systems, distributed architectures, and developer tooling.
        </div>

        <div>
          I build scalable enterprise systems using <Cmd>Java</Cmd>,{" "}
          <Cmd>Spring Framework</Cmd>, <Cmd>Angular</Cmd>, and cloud-native
          technologies, with strong focus on microservices, BPM workflows, and
          automation systems.
        </div>

        <div>
          Creator of <Cmd>Naftah (نفطه)</Cmd> — a JVM-based programming language
          that allows coding in Arabic and Tunisian dialects to make programming
          more accessible and inclusive.
        </div>

        <Seperator>----</Seperator>

        <div>
          This project's source code is available in the{" "}
          <Link
            href="https://github.com/Chakib-DAII/terminal-portfolio"
            target="_blank"
            rel="noreferrer noopener"
          >
            GitHub repository
          </Link>
          .
        </div>

        <Seperator>----</Seperator>

        <div>
          Type <Cmd>help</Cmd> to see available commands.
        </div>
      </div>

      <div className="illu-section">
        <PreImg>
          {`
                         :8#8#&8@8&8&                         
                     o&o8#@####@#####8#&*                     
                   :8##8@@##@##888###@##88.                   
                 &#####8####8#@#####8###@8*                   
                &888@###@#####8@8######888                    
                8o#8#88###8#8888#8888#8#888                   
                &888&o&oo:***:******:*::o&88                  
                .&&o:*****************:::o&&                  
                 oo:******************::::o&*                 
                 o:*:****.........*:oo*::::o                  
                 ::*:o:*:::::****::****o::::o*                
               **:**:::o&.*::**::oo8:&o::::**:*               
               .*****:***:::****:********::::**               
                :*****.**************.***:::o:                
                 *:***...*:**..***:******::::*                
                 ******.****:**::*******:::                   
                   *******::**:**::****::::                   
                   o*****:o::::::::****:::@8                  
                   #@::::****:::***:::::o:@#8                 
                *8&#@o::::********:::::o::@##88&*             
            :888#@88@@ooo::::*:*::oooo:::8##########&         
        o888####@#88#@8o:ooo:::::oo::*::o##############88:    
   .&88##########8#88##&o:**:::::******o8##8##############8888
  8#88###########8##88##o::***********o###888#8##############8
  #####88##8#888#88#888##@8:::*****::#8#8888##888###888###8###
  ##888#8#88888888888#@@@#8#@o*****##888@@@@@@@@#88888888888##
  #888888888888888888888#@@@####:&###@@##8#8888888888888888888
  #88888888888888888888888##@##88@###8888888888888888888888888
  888888888888888888888888888########88#88888##888888888888#88
`}
        </PreImg>
      </div>
    </HeroContainer>
  );
};

export default Welcome;
