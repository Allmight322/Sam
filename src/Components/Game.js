import classes from './Game.module.css'
import Figure from "./Figure";
import React, {useState} from 'react';
import Cell from "./Cell";
import EnterField from "./EnterField";
const image = <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
width="640.000000pt" height='1280.000000pt' viewBox="0 0 640.000000 1280.000000"
preserveAspectRatio="xMidYMid meet">
    <metadata>
    Created by potrace 1.15, written by Peter Selinger 2001-2017
</metadata>
<g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
   fill="#000000" stroke="none">
    <path d="M2870 12785 c-25 -8 -96 -43 -157 -79 -182 -104 -264 -126 -475 -126
-101 0 -123 3 -202 31 -69 24 -98 29 -131 24 -94 -14 -180 -102 -212 -216
l-16 -56 -80 -34 c-118 -50 -181 -94 -280 -198 -97 -103 -127 -152 -127 -209
0 -38 -2 -41 -47 -60 -80 -34 -208 -69 -408 -113 -242 -52 -334 -81 -366 -115
-20 -22 -24 -35 -24 -92 0 -65 2 -71 65 -176 69 -116 165 -228 236 -277 26
-17 44 -38 44 -49 0 -10 -14 -53 -31 -96 -30 -74 -31 -81 -19 -133 10 -44 22
-64 64 -106 60 -61 154 -109 251 -131 41 -9 157 -18 280 -23 240 -9 285 -21
350 -93 44 -48 56 -78 57 -139 0 -50 -16 -89 -68 -160 -38 -52 -40 -61 -19
-79 22 -18 19 -35 -20 -94 -66 -99 -55 -156 35 -171 83 -14 56 -65 -35 -65
-93 0 -113 -58 -46 -127 37 -38 39 -42 31 -79 -5 -21 -20 -69 -34 -107 -15
-37 -26 -82 -26 -100 0 -21 -16 -56 -45 -101 -47 -73 -56 -114 -29 -140 25
-25 62 -19 140 24 44 24 75 36 79 30 4 -6 -10 -48 -29 -94 -20 -46 -36 -89
-36 -96 0 -21 -54 -112 -124 -207 -35 -48 -74 -108 -86 -132 -59 -117 -100
-265 -100 -361 0 -32 -9 -102 -20 -156 l-19 -98 20 -22 c20 -22 20 -24 5 -130
-32 -210 -65 -312 -138 -416 -48 -68 -101 -115 -322 -284 -323 -246 -445 -401
-492 -627 -26 -123 1 -250 67 -322 21 -23 65 -93 96 -156 55 -109 61 -116 126
-160 37 -26 112 -84 167 -130 135 -113 200 -154 290 -184 154 -51 223 -42 299
40 58 63 78 106 105 228 4 18 13 27 26 27 31 0 37 45 11 80 -15 21 -21 44 -21
81 l0 52 83 -6 c94 -6 173 -28 211 -58 22 -17 26 -28 26 -69 0 -27 -9 -88 -20
-135 -11 -47 -20 -115 -20 -152 0 -57 2 -64 15 -53 18 15 18 20 0 -105 -8 -55
-15 -148 -15 -207 0 -99 2 -109 25 -136 19 -22 25 -41 25 -75 0 -32 12 -74 39
-134 32 -75 54 -136 101 -285 8 -24 4 -29 -40 -56 -27 -17 -58 -33 -69 -37
-12 -3 -21 -10 -21 -15 0 -9 44 -46 63 -53 14 -4 1 -26 -89 -148 -66 -89 -73
-106 -52 -127 18 -18 42 -15 73 10 15 12 26 18 24 12 -35 -83 -41 -106 -35
-139 9 -49 33 -56 63 -19 21 27 23 28 23 7 0 -12 8 -26 17 -32 15 -8 15 -11 4
-25 -12 -14 -12 -23 -1 -55 7 -23 10 -54 6 -75 -6 -29 -4 -36 9 -36 27 0 17
-55 -35 -199 -59 -160 -77 -269 -86 -511 -5 -116 -2 -183 10 -265 22 -152 32
-187 55 -180 15 5 32 -23 101 -165 61 -123 88 -170 101 -170 13 0 26 -26 53
-108 20 -60 52 -131 70 -158 30 -43 38 -71 71 -239 88 -450 44 -599 -180 -612
-38 -2 -124 -15 -190 -28 -66 -13 -169 -32 -230 -43 -60 -11 -136 -30 -167
-42 -172 -64 -290 -206 -313 -376 -8 -59 3 -73 37 -50 20 14 23 13 57 -22 45
-46 158 -115 249 -152 183 -74 355 -84 562 -31 69 17 208 42 310 56 102 14
227 32 278 41 116 21 208 15 357 -21 60 -15 135 -27 166 -27 134 0 237 95 300
275 16 45 36 85 48 94 25 17 27 50 4 97 -14 31 -15 41 -3 75 9 27 11 62 6 108
-16 166 -18 212 -7 263 13 63 29 93 38 71 9 -21 42 -51 57 -51 11 0 13 34 12
183 -1 177 0 183 24 226 14 25 30 46 35 48 6 2 23 -22 39 -52 30 -58 71 -99
92 -91 7 3 28 -34 54 -95 55 -130 154 -281 181 -277 15 2 28 -12 54 -57 68
-115 78 -146 83 -233 5 -91 0 -85 61 -66 15 4 27 -10 63 -73 87 -150 138 -242
138 -246 0 -14 -77 -12 -169 5 -90 16 -119 17 -191 8 -365 -47 -509 -128 -624
-353 -60 -117 -64 -162 -22 -206 60 -62 168 -107 451 -186 171 -47 196 -50
291 -31 174 36 315 47 709 56 593 13 659 24 749 120 55 58 82 111 105 203 10
39 25 73 32 76 8 2 17 9 21 15 13 20 8 138 -12 281 -24 168 -25 224 -5 358 22
143 34 179 56 172 31 -10 59 48 59 125 0 49 7 79 26 120 45 95 63 159 94 329
32 172 67 311 80 311 4 0 14 -10 23 -22 24 -37 32 -13 31 95 -1 75 -10 139
-33 241 -29 132 -40 237 -23 235 49 -8 42 54 -33 301 -12 41 -25 90 -29 108
-6 33 -5 33 24 27 17 -4 30 -3 30 1 0 22 -51 171 -110 324 -87 225 -108 293
-122 404 -10 80 -8 108 11 234 27 179 49 262 105 413 82 218 106 335 137 673
14 157 6 462 -16 601 -37 232 -94 444 -240 895 -36 113 -82 260 -101 328 -19
68 -44 146 -55 175 -24 61 -123 479 -179 757 -83 415 -108 767 -75 1055 49
418 26 665 -82 880 -68 136 -131 204 -318 341 -266 195 -587 479 -681 602 -48
64 -100 157 -196 352 -72 146 -147 289 -166 319 -22 32 -72 82 -126 126 -159
127 -293 273 -438 477 -25 36 -77 90 -115 121 -38 30 -84 71 -102 92 -33 38
-33 40 -25 99 4 34 8 93 8 131 0 115 -49 183 -157 219 -57 19 -97 19 -157 1z"
    />
</g>
</svg>


const Game=()=>{
    const [selected, setSelected]= useState()
    const [figuresAtr, setFiguresAtr]=useState([
        {id:'1', Number:'1', Group:'1', Size:'1', TeamNumber:'1'},
        {id:'2', Number:'2', Group:'1', Size:'1', TeamNumber:'1'},
        {id:'3', Number:'3', Group:'1', Size:'2', TeamNumber:'1'},
        {id:'4', Number:'4', Group:'1', Size:'2', TeamNumber:'1'},
        {id:'5', Number:'5', Group:'1', Size:'3', TeamNumber:'1'},
        {id:'6', Number:'6', Group:'1', Size:'3', TeamNumber:'1'},
        {id:'7', Number:'1', Group:'3', Size:'1', TeamNumber:'2'},
        {id:'8', Number:'2', Group:'3', Size:'1', TeamNumber:'2'},
        {id:'9', Number:'3', Group:'3', Size:'2', TeamNumber:'2'},
        {id:'10', Number:'4', Group:'3', Size:'2', TeamNumber:'2'},
        {id:'11', Number:'5', Group:'3', Size:'3', TeamNumber:'2'},
        {id:'12', Number:'6', Group:'3', Size:'3', TeamNumber:'2'},
    ])
    const handleChange = e => {

    }
    const figures=figuresAtr.map(e=><Figure id={e.id} Number={e.Number}  Group={e.Group}  Size={e.Size}  TeamNumber={e.TeamNumber}  Image={image} Selected={selected} SetSelected={setSelected}/>)



const getCell=(number, group, style='')=>
    <td className={style}><Cell Number={number} Group={group} Figures={figures} Selected={selected} SetFiguresAtr={setFiguresAtr}/></td>




    console.log(selected)
    console.log(figures)
    return(
       <div className={classes.main}>
           <div >
              <table>
                   <tr>
                       {getCell('1','1')}
                       {getCell('2','1')}
                       {getCell('3','1')}
                       {getCell('4','1')}
                       {getCell('5','1')}
                       {getCell('6','1')}

                     {/*<td><Figure Number='1' Size='1' TeamNumber='1' Image={image} Selected={selected} SetSelected={setSelected}/> </td>
                       <td><Figure Number='2' Size='1' TeamNumber='1' Image={image} Selected={selected} SetSelected={setSelected}/></td>
                       <td><Figure Number='3' Size='2' TeamNumber='1' Image={image} Selected={selected} SetSelected={setSelected}/></td>
                       <td><Figure Number='4' Size='2' TeamNumber='1' Image={image} Selected={selected} SetSelected={setSelected}/></td>
                       <td><Figure Number='5' Size='3' TeamNumber='1' Image={image} Selected={selected} SetSelected={setSelected}/></td>
                       <td><Figure Number='6' Size='3' TeamNumber='1' Image={image} Selected={selected} SetSelected={setSelected}/></td>*/}
                   </tr>
               </table>
           </div>
        <table >
            <tr>
                {getCell('1','2',classes.style)}
                {getCell('2','2',classes.style)}
                {getCell('3','2',classes.style)}

             </tr>
            <tr>
                {getCell('4','2',classes.style)}
                {getCell('5','2',classes.style)}
                {getCell('6','2',classes.style)}
             </tr>
            <tr>
                {getCell('7','2',classes.style)}
                {getCell('8','2',classes.style)}
                {getCell('9','2',classes.style)}
             </tr>
         </table>
           <div>
               <table>
                   <tr>
                       {getCell('1','3')}
                       {getCell('2','3')}
                       {getCell('3','3')}
                       {getCell('4','3')}
                       {getCell('5','3')}
                       {getCell('6','3')}
                      {/* <td><Figure Number='7' Size='1' TeamNumber='2' Image={image} Selected={selected} SetSelected={setSelected}/></td>
                       <td><Figure Number='8' Size='1' TeamNumber='2' Image={image} Selected={selected} SetSelected={setSelected}/></td>
                       <td><Figure Number='9' Size='2' TeamNumber='2' Image={image} Selected={selected} SetSelected={setSelected}/></td>
                       <td><Figure Number='10' Size='2' TeamNumber='2' Image={image} Selected={selected} SetSelected={setSelected}/></td>
                       <td><Figure Number='11' Size='3' TeamNumber='2' Image={image} Selected={selected} SetSelected={setSelected}/></td>
                       <td><Figure Number='12' Size='3' TeamNumber='2' Image={image} Selected={selected} SetSelected={setSelected}/></td>*/}
                   </tr>
               </table>
           </div>

       </div>

   )
};
export default Game;