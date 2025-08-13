 // Object to hold the mappings
 const colorMapping = {
    "C0 R1": "#FFFFFF",
    "C0 R2": "#000000",
    
    "C1 R1": "#F0EB87",
    "C2 R1": "#EBDC82",
    "C3 R1": "#FF6E00",
    "C4 R1": "#823214",
    "C5 R1": "#F59BB9",
    "C6 R1": "#781E41",
    "C7 R1": "#E6B4E1",
    "C8 R1": "#691978",
    "C9 R1": "#0046B9",
    "C10 R1": "#96C8E6",
    "C11 R1": "#6ECDE1",
    "C12 R1": "#00AA9B",
    "C13 R1": "#A5D7BE",
    "C14 R1": "#4B550A",
    "C15 R1": "#5F554B",
    "C16 R1": "#2D1E0F",
    "C17 R1": "#825523",
    "C18 R1": "#E69182",
    "C19 R1": "#78236E",
    "C20 R1": "#C3A5DC",
    "C21 R1": "#508C96",
    "C22 R1": "#73B4B4",
    "C23 R1": "#CDCDBE",
    "C24 R1": "#AFA54B",
    "C25 R1": "#6E87B4",
    "C26 R1": "#D7AAC3",
    "C27 R1": "#E6C3A5",
    "C28 R1": "#EBD2D7",
    "C29 R1": "#6973B4",
    "C30 R1": "#648C41",
    "C31 R1": "#A5554B",
    "C32 R1": "#00AA91",
    "C33 R1": "#9BA0A0",
    "C34 R1": "#F5D200",
    
    "C1 R2": "#F5EB5F",
    "C2 R2": "#F0D25F",
    "C3 R2": "#E16900",
    "C4 R2": "#FFB4AF",
    "C5 R2": "#F0B9D2",
    "C6 R2": "#E6B9DC",
    "C7 R2": "#E1A0DC",
    "C8 R2": "#5A146E",
    "C9 R2": "#231478",
    "C10 R2": "#A5C8EB",
    "C11 R2": "#00BEDC",
    "C12 R2": "#009678",
    "C13 R2": "#87D2AF",
    "C14 R2": "#DCE169",
    "C15 R2": "#C8BEBE",
    "C16 R2": "#322828",
    "C17 R2": "#AA7D5A",
    "C18 R2": "#E6A59B",
    "C19 R2": "#6E415F",
    "C20 R2": "#AAA5BE",
    "C21 R2": "#647878",
    "C22 R2": "#96A096",
    "C23 R2": "#D7D7BE",
    "C24 R2": "#9B8728",
    "C25 R2": "#23508C",
    "C26 R2": "#C382A5",
    "C27 R2": "#E1AA82",
    "C28 R2": "#E1698C",
    "C29 R2": "#CDE1E6",
    "C30 R2": "#6E7D32",
    "C31 R2": "#9B6955",
    "C32 R2": "#E1E100",
    "C33 R2": "#919191",
    "C34 R2": "#E6F541",
    
    "C1 R3": "#F5E100",
    "C2 R3": "#EBC841",
    "C3 R3": "#C84B00",
    "C4 R3": "#FF8778",
    "C5 R3": "#F5739B",
    "C6 R3": "#E66EB4",
    "C7 R3": "#D77DD2",
    "C8 R3": "#460A6E",
    "C9 R3": "#230091",
    "C10 R3": "#64AFE1",
    "C11 R3": "#00C3DC",
    "C12 R3": "#006E64",
    "C13 R3": "#5AC396",
    "C14 R3": "#D2DC3C",
    "C15 R3": "#B4AFAA",
    "C16 R3": "#C8CDCD",
    "C17 R3": "#B98750",
    "C18 R3": "#E6B9AF",
    "C19 R3": "#91238C",
    "C20 R3": "#CDAFE1",
    "C21 R3": "#5A91AF",
    "C22 R3": "#96C8C8",
    "C23 R3": "#5F550F",
    "C24 R3": "#82730F",
    "C25 R3": "#002D64",
    "C26 R3": "#AF6991",
    "C27 R3": "#D28C55",
    "C28 R3": "#E1377D",
    "C29 R3": "#73B4CD",
    "C30 R3": "#B9C887",
    "C31 R3": "#8C3719",
    "C32 R3": "#FFCD0F",
    "C33 R3": "#828287",
    "C34 R3": "#7D7873",
    
    "C1 R4": "#C8AA00",
    "C2 R4": "#EBAA00",
    "C3 R4": "#BE6400",
    "C4 R4": "#FF5F41",
    "C5 R4": "#F59BB9",
    "C6 R4": "#D71E87",
    "C7 R4": "#C305AA",
    "C8 R4": "#501E46",
    "C9 R4": "#1E1EAA",
    "C10 R4": "#69AFE6",
    "C11 R4": "#00A0CD",
    "C12 R4": "#00827D",
    "C13 R4": "#009141",
    "C14 R4": "#C3D700",
    "C15 R4": "#A09696",
    "C16 R4": "#AFB9B9",
    "C17 R4": "#BE9178",
    "C18 R4": "#E6C8C3",
    "C19 R4": "#875A7D",
    "C20 R4": "#B9B9CD",
    "C21 R4": "#7DAAAF",
    "C22 R4": "#AFB9B4",
    "C23 R4": "#464114",
    "C24 R4": "#D2DCD7",
    "C25 R4": "#001E50",
    "C26 R4": "#91416E",
    "C27 R4": "#BE6E2D",
    "C28 R4": "#BE2D5F",
    "C29 R4": "#3296B4",
    "C30 R4": "#B4BE8C",
    "C31 R4": "#D7D2CD",
    "C32 R4": "#7D6E82",
    "C33 R4": "#00AA87",
    "C34 R4": "#05236E",
    
    "C1 R5": "#AA9100",
    "C2 R5": "#CD8C00",
    "C3 R5": "#9B4B00",
    "C4 R5": "#FA4605",
    "C5 R5": "#F03C6E",
    "C6 R5": "#AA0055",
    "C7 R5": "#AF0096",
    "C8 R5": "#552355",
    "C9 R5": "#000F9B",
    "C10 R5": "#009BD7",
    "C11 R5": "#00AACD",
    "C12 R5": "#009182",
    "C13 R5": "#007837",
    "C14 R5": "#C3D700",
    "C15 R5": "#918282",
    "C16 R5": "#96A0A5",
    "C17 R5": "#CDA55F",
    "C18 R5": "#5A2328",
    "C19 R5": "#CD82C3",
    "C20 R5": "#D7C3E1",
    "C21 R5": "#8C9B9B",
    "C22 R5": "#B4D7D2",
    "C23 R5": "#878200",
    "C24 R5": "#BECDC8",
    "C25 R5": "#D2D7E6",
    "C26 R5": "#691E41",
    "C27 R5": "#964600",
    "C28 R5": "#AF194B",
    "C29 R5": "#0087C8",
    "C30 R5": "#96AF8C",
    "C31 R5": "#CDC3B9",
    "C32 R5": "#FF7350",
    "C33 R5": "#1E1E1E",
    "C34 R5": "#4B1E50",
    
    "C1 R6": "#7D6E14",
    "C2 R6": "#A57800",
    "C3 R6": "#96500A",
    "C4 R6": "#D24619",
    "C5 R6": "#EB5087",
    "C6 R6": "#AA0055",
    "C7 R6": "#9B0587",
    "C8 R6": "#55195F",
    "C9 R6": "#1E0F64",
    "C10 R6": "#0041B4",
    "C11 R6": "#0091C3",
    "C12 R6": "#00785F",
    "C13 R6": "#005F2D",
    "C14 R6": "#9BA500",
    "C15 R6": "#786969",
    "C16 R6": "#788282",
    "C17 R6": "#CDAA91",
    "C18 R6": "#73282D",
    "C19 R6": "#9B7896",
    "C20 R6": "#D2CDD7",
    "C21 R6": "#87AFC3",
    "C22 R6": "#B9C3BE",
    "C23 R6": "#7D732D",
    "C24 R6": "#9BB9AF",
    "C25 R6": "#BECDE6",
    "C26 R6": "#E1C8D2",
    "C27 R6": "#7D3700",
    "C28 R6": "#9B0F2D",
    "C29 R6": "#0082BE",
    "C30 R6": "#7D8C2D",
    "C31 R6": "#B9AFA5",
    "C32 R6": "#FF3282",
    "C33 R6": "#0087CD",
    "C34 R6": "#BEB9AF",
    
    "C1 R7": "#F0E15F",
    "C2 R7": "#6E5514",
    "C3 R7": "#4B230A",
    "C4 R7": "#963214",
    "C5 R7": "#E60046",
    "C6 R7": "#69143C",
    "C7 R7": "#782364",
    "C8 R7": "#410F5A",
    "C9 R7": "#1E0078",
    "C10 R7": "#0055BE",
    "C11 R7": "#008CB4",
    "C12 R7": "#005F55",
    "C13 R7": "#194628",
    "C14 R7": "#878C00",
    "C15 R7": "#5F504B",
    "C16 R7": "#4B5055",
    "C17 R7": "#CDBEA0",
    "C18 R7": "#8C3237",
    "C19 R7": "#DCA0D2",
    "C20 R7": "#232832",
    "C21 R7": "#A0BEC8",
    "C22 R7": "#C8DCDC",
    "C23 R7": "#B9FA00",
    "C24 R7": "#789B91",
    "C25 R7": "#A0B4E1",
    "C26 R7": "#E1BEC8",
    "C27 R7": "#E1CDB9",
    "C28 R7": "#732D46",
    "C29 R7": "#005A91",
    "C30 R7": "#5A7300",
    "C31 R7": "#A59687",
    "C32 R7": "#E614AA",
    "C33 R7": "#28A523",
    "C34 R7": "#B4AFA5",
    
    "C1 R8": "#F5DC28",
    "C2 R8": "#F5D282",
    "C3 R8": "#E6D2AA",
    "C4 R8": "#6E2D1E",
    "C5 R8": "#E10050",
    "C6 R8": "#F091CD",
    "C7 R8": "#E1BEE1",
    "C8 R8": "#D2C8E6",
    "C9 R8": "#141991",
    "C10 R8": "#00327D",
    "C11 R8": "#007DAA",
    "C12 R8": "#005550",
    "C13 R8": "#A5E1BE",
    "C14 R8": "#6E6914",
    "C15 R8": "#322823",
    "C16 R8": "#3C413C",
    "C17 R8": "#D7BEAF",
    "C18 R8": "#D28291",
    "C19 R8": "#BEA5B9",
    "C20 R8": "#233250",
    "C21 R8": "#A5B4B4",
    "C22 R8": "#C8CDCD",
    "C23 R8": "#9B9655",
    "C24 R8": "#507D73",
    "C25 R8": "#6E96D2",
    "C26 R8": "#D2A5AF",
    "C27 R8": "#DCB9A0",
    "C28 R8": "#E1BED2",
    "C29 R8": "#003255",
    "C30 R8": "#6E644B",
    "C31 R8": "#7D695A",
    "C32 R8": "#785AC8",
    "C33 R8": "#FF5FAA",
    "C34 R8": "#A0A5A5",
    
    "C1 R9": "#FAD700",
    "C2 R9": "#F5CD87",
    "C3 R9": "#FAB99B",
    "C4 R9": "#FAAAB4",
    "C5 R9": "#BE0F3C",
    "C6 R9": "#EB69B9",
    "C7 R9": "#D79BE1",
    "C8 R9": "#BEAAE1",
    "C9 R9": "#00237D",
    "C10 R9": "#0050A5",
    "C11 R9": "#007896",
    "C12 R9": "#007869",
    "C13 R9": "#82DCAF",
    "C14 R9": "#E1E66E",
    "C15 R9": "#C8C3C3",
    "C16 R9": "#323232",
    "C17 R9": "#DCD2B9",
    "C18 R9": "#E1A5B4",
    "C19 R9": "#E6B4DC",
    "C20 R9": "#233C69",
    "C21 R9": "#A0BECD",
    "C22 R9": "#144137",
    "C23 R9": "#CDD24B",
    "C24 R9": "#195546",
    "C25 R9": "#2869BE",
    "C26 R9": "#C38C9B",
    "C27 R9": "#D2A587",
    "C28 R9": "#D6A6BE",
    "C29 R9": "#AFD7D7",
    "C30 R9": "#464B23",
    "C31 R9": "#5F503C",
    "C32 R9": "#557887",
    "C33 R9": "#FF6E00",
    
    "C1 R10": "#FAD200",
    "C2 R10": "#FAC35A",
    "C3 R10": "#EBBE87",
    "C4 R10": "#FA9BAF",
    "C5 R10": "#C80046",
    "C6 R10": "#E1239B",
    "C7 R10": "#C864CD",
    "C8 R10": "#B9A5E1",
    "C9 R10": "#001978",
    "C10 R10": "#05194B",
    "C11 R10": "#006482",
    "C12 R10": "#006450",
    "C13 R10": "#69DCA0",
    "C14 R10": "#D7E137",
    "C15 R10": "#AFAFAA",
    "C16 R10": "#413C23",
    "C17 R10": "#E1CDC3",
    "C18 R10": "#E6B9C3",
    "C19 R10": "#D2C3D2",
    "C20 R10": "#91A0BE",
    "C21 R10": "#BED2D2",
    "C22 R10": "#006455",
    "C23 R10": "#AAA569",
    "C24 R10": "#002823",
    "C25 R10": "#001E7D",
    "C26 R10": "#AA6473",
    "C27 R10": "#BE8C64",
    "C28 R10": "#CD8CAA",
    "C29 R10": "#55C8BE",
    "C30 R10": "#E6E1CD",
    "C31 R10": "#463728",
    "C32 R10": "#698782",
    "C33 R10": "#FADC00",
    
    "C1 R11": "#D7AA00",
    "C2 R11": "#FAC378",
    "C3 R11": "#FFA578",
    "C4 R11": "#F5AFBE",
    "C5 R11": "#961E3C",
    "C6 R11": "#D20073",
    "C7 R11": "#A519AA",
    "C8 R11": "#AA91DC",
    "C9 R11": "#190F55",
    "C10 R11": "#003769",
    "C11 R11": "#005F78",
    "C12 R11": "#004B4B",
    "C13 R11": "#00A537",
    "C14 R11": "#D2DC00",
    "C15 R11": "#9B9B91",
    "C16 R11": "#554614",
    "C17 R11": "#5A2D14",
    "C18 R11": "#E6BEC8",
    "C19 R11": "#E6C8E1",
    "C20 R11": "#A0AAC8",
    "C21 R11": "#BEC8C8",
    "C22 R11": "#008273",
    "C23 R11": "#D2D76E",
    "C24 R11": "#C8E1E6",
    "C25 R11": "#001E7D",
    "C26 R11": "#914150",
    "C27 R11": "#AA693C",
    "C28 R11": "#B96487",
    "C29 R11": "#00AFBE",
    "C30 R11": "#E1D7BE",
    "C31 R11": "#D2CDC8",
    "C32 R11": "#78876E",
    "C33 R11": "#FF5A00",
    
    "C1 R12": "#AA8C00",
    "C2 R12": "#FFB93C",
    "C3 R12": "#EB9650",
    "C4 R12": "#FF828C",
    "C5 R12": "#A50A3C",
    "C6 R12": "#AA005A",
    "C7 R12": "#911E96",
    "C8 R12": "#875FCD",
    "C9 R12": "#190064",
    "C10 R12": "#001E32",
    "C11 R12": "#004150",
    "C12 R12": "#004137",
    "C13 R12": "#00912D",
    "C14 R12": "#C3D700",
    "C15 R12": "#87877D",
    "C16 R12": "#464123",
    "C17 R12": "#50231E",
    "C18 R12": "#4B2828",
    "C19 R12": "#DCD2DC",
    "C20 R12": "#B9C3D7",
    "C21 R12": "#B9CDDC",
    "C22 R12": "#73C3B9",
    "C23 R12": "#AAD7E1",
    "C24 R12": "#AAD7E2",
    "C25 R12": "#DCD7E1",
    "C26 R12": "#7D323C",
    "C27 R12": "#733C0A",
    "C28 R12": "#AF416E",
    "C29 R12": "#00AAB9",
    "C30 R12": "#DCCDAF",
    "C31 R12": "#BEB9AA",
    "C32 R12": "#7D6E46",
    "C33 R12": "#141414",
    
    "C1 R13": "#967D00",
    "C2 R13": "#FFB450",
    "C3 R13": "#FF8741",
    "C4 R13": "#FF829B",
    "C5 R13": "#732837",
    "C6 R13": "#870550",
    "C7 R13": "#6E2369",
    "C8 R13": "#8C6ED2",
    "C9 R13": "#0F1969",
    "C10 R13": "#00233C",
    "C11 R13": "#004B5A",
    "C12 R13": "#004B3C",
    "C13 R13": "#006E28",
    "C14 R13": "#AFB900",
    "C15 R13": "#6E6964",
    "C16 R13": "#826928",
    "C17 R13": "#964B19",
    "C18 R13": "#3C1919",
    "C19 R13": "#462841",
    "C20 R13": "#CDD2DC",
    "C21 R13": "#CDDCDC",
    "C22 R13": "#9BD2CD",
    "C23 R13": "#DCDC87",
    "C24 R13": "#7DC8DC",
    "C25 R13": "#D2CDDC",
    "C26 R13": "#EBCDD7",
    "C27 R13": "#5F2D0A",
    "C28 R13": "#9B2D5A",
    "C29 R13": "#00739B",
    "C30 R13": "#D2BE96",
    "C31 R13": "#A59B87",
    "C32 R13": "#826E46",
    "C33 R13": "#007DCD",
    
    "C1 R14": "#F5DC5A",
    "C2 R14": "#FFA000",
    "C3 R14": "#E6690F",
    "C4 R14": "#FA6482",
    "C5 R14": "#8C1437",
    "C6 R14": "#691941",
    "C7 R14": "#D2BEDC",
    "C8 R14": "#642DB9",
    "C9 R14": "#001E5F",
    "C10 R14": "#78C3E6",
    "C11 R14": "#BEE1E6",
    "C12 R14": "#004132",
    "C13 R14": "#0F4B28",
    "C14 R14": "#919100",
    "C15 R14": "#555A50",
    "C16 R14": "#504623",
    "C17 R14": "#7D4B3C",
    "C18 R14": "#64322D",
    "C19 R14": "#412337",
    "C20 R14": "#002841",
    "C21 R14": "#C8D2D2",
    "C22 R14": "#B4DCD7",
    "C23 R14": "#CDCDAA",
    "C24 R14": "#37B9C3",
    "C25 R14": "#C3B9D2",
    "C26 R14": "#E6BEC8",
    "C27 R14": "#EBE1C3",
    "C28 R14": "#871E4B",
    "C29 R14": "#005A87",
    "C30 R14": "#AA9B73",
    "C31 R14": "#AFB4AF",
    "C32 R14": "#876E4B",
    "C33 R14": "#009BD7",
    
    "C1 R15": "#FADC50",
    "C2 R15": "#FF9600",
    "C3 R15": "#FF6900",
    "C4 R15": "#FF5A5A",
    "C5 R15": "#E6C3D2",
    "C6 R15": "#F0A5D7",
    "C7 R15": "#CDA0E1",
    "C8 R15": "#7850C3",
    "C9 R15": "#001964",
    "C10 R15": "#A0D7E6",
    "C11 R15": "#8CD7E1",
    "C12 R15": "#AFE1DC",
    "C13 R15": "#A0D791",
    "C14 R15": "#7D7300",
    "C15 R15": "#1E1E19",
    "C16 R15": "#968746",
    "C17 R15": "#AF500F",
    "C18 R15": "#82464B",
    "C19 R15": "#55285A",
    "C20 R15": "#002337",
    "C21 R15": "#1E3C2D",
    "C22 R15": "#BEE1DC",
    "C23 R15": "#E1E1A0",
    "C24 R15": "#009BB9",
    "C25 R15": "#A091B4",
    "C26 R15": "#E6AAB9",
    "C27 R15": "#EBD7A0",
    "C28 R15": "#E1CDE1",
    "C29 R15": "#00647D",
    "C30 R15": "#8C6E50",
    "C31 R15": "#9BA09B",
    "C32 R15": "#87694B",
    "C33 R15": "#D20069",
    
    "C1 R16": "#F5D746",
    "C2 R16": "#FF7800",
    "C3 R16": "#C85505",
    "C4 R16": "#F5415A",
    "C5 R16": "#E696AF",
    "C6 R16": "#F073C8",
    "C7 R16": "#C39BD7",
    "C8 R16": "#4B1E8C",
    "C9 R16": "#1E1941",
    "C10 R16": "#3CAFE1",
    "C11 R16": "#32C8D2",
    "C12 R16": "#A0E1D7",
    "C13 R16": "#9BD787",
    "C14 R16": "#EBE68C",
    "C15 R16": "#C8C8C8",
    "C16 R16": "#9B9673",
    "C17 R16": "#966E5F",
    "C18 R16": "#733732",
    "C19 R16": "#5A374B",
    "C20 R16": "#002D5A",
    "C21 R16": "#19372D",
    "C22 R16": "#414B23",
    "C23 R16": "#D7D2B9",
    "C24 R16": "#0078A0",
    "C25 R16": "#786491",
    "C26 R16": "#E18CA0",
    "C27 R16": "#E6CD7D",
    "C28 R16": "#C8AFD2",
    "C29 R16": "#91DCD7",
    "C30 R16": "#7D5F3C",
    "C31 R16": "#9B9B9B",
    "C32 R16": "#8C694B",
    "C33 R16": "#F5DC00",
    
    "C1 R17": "#FFCD00",
    "C2 R17": "#CD7300",
    "C3 R17": "#FF5A00",
    "C4 R17": "#F0415F",
    "C5 R17": "#E14B69",
    "C6 R17": "#EB3CAA",
    "C7 R17": "#B496D7",
    "C8 R17": "#4B1E78",
    "C9 R17": "#140A50",
    "C10 R17": "#41B9E6",
    "C11 R17": "#0096AA",
    "C12 R17": "#3CD7C3",
    "C13 R17": "#50BE46",
    "C14 R17": "#EBE673",
    "C15 R17": "#B4B4B4",
    "C16 R17": "#AFA06E",
    "C17 R17": "#E19669",
    "C18 R17": "#9B646E",
    "C19 R17": "#642D6E",
    "C20 R17": "#3C5F7D",
    "C21 R17": "#1E5F46",
    "C22 R17": "#3C4123",
    "C23 R17": "#E6E6AF",
    "C24 R17": "#005F87",
    "C25 R17": "#5F4678",
    "C26 R17": "#D25F78",
    "C27 R17": "#F0D223",
    "C28 R17": "#C896D2",
    "C29 R17": "#69BEBE",
    "C30 R17": "#E6DCC3",
    "C31 R17": "#69696E",
    "C32 R17": "#8C5F41",
    "C33 R17": "#B423B9",
    
    "C1 R18": "#C89B00",
    "C2 R18": "#AF6900",
    "C3 R18": "#A04B0F",
    "C4 R18": "#EB2332",
    "C5 R18": "#D70F3C",
    "C6 R18": "#C3007D",
    "C7 R18": "#C8A5D2",
    "C8 R18": "#370082",
    "C9 R18": "#141950",
    "C10 R18": "#009BDC",
    "C11 R18": "#007D91",
    "C12 R18": "#009678",
    "C13 R18": "#05AA28",
    "C14 R18": "#E6E13C",
    "C15 R18": "#A5A5AA",
    "C16 R18": "#B4AF91",
    "C17 R18": "#AF877D",
    "C18 R18": "#C3828C",
    "C19 R18": "#876478",
    "C20 R18": "#003773",
    "C21 R18": "#46695F",
    "C22 R18": "#3C4114",
    "C23 R18": "#EBE6A5",
    "C24 R18": "#AADCEB",
    "C25 R18": "#41285A",
    "C26 R18": "#B4374B",
    "C27 R18": "#EBBE00",
    "C28 R18": "#B491BE",
    "C29 R18": "#28A091",
    "C30 R18": "#F0CDA0",
    "C31 R18": "#DCDCE1",
    "C32 R18": "#8C9191",
    "C33 R18": "#F02D41",
    
    "C1 R19": "#AA8700",
    "C2 R19": "#9B5F05",
    "C3 R19": "#9B460F",
    "C4 R19": "#DC3723",
    "C5 R19": "#BE0532",
    "C6 R19": "#A50069",
    "C7 R19": "#BE82D7",
    "C8 R19": "#462364",
    "C9 R19": "#0A1E41",
    "C10 R19": "#009BDC",
    "C11 R19": "#006978",
    "C12 R19": "#007864",
    "C13 R19": "#239123",
    "C14 R19": "#EBE100",
    "C15 R19": "#919191",
    "C16 R19": "#C3B48C",
    "C17 R19": "#EBB496",
    "C18 R19": "#B4828C",
    "C19 R19": "#AA82B4",
    "C20 R19": "#55738C",
    "C21 R19": "#14644B",
    "C22 R19": "#55732D",
    "C23 R19": "#EBE68C",
    "C24 R19": "#8CD2E1",
    "C25 R19": "#E6D2E1",
    "C26 R19": "#A0232D",
    "C27 R19": "#E6B400",
    "C28 R19": "#9B78A5",
    "C29 R19": "#007D8C",
    "C30 R19": "#E1BE91",
    "C31 R19": "#AAB9C3",
    "C32 R19": "#37321E",
    "C33 R19": "#001E9B",
    
    "C1 R20": "#877319",
    "C2 R20": "#73550A",
    "C3 R20": "#5A3214",
    "C4 R20": "#D21E28",
    "C5 R20": "#9B1932",
    "C6 R20": "#870555",
    "C7 R20": "#AF78C3",
    "C8 R20": "#321955",
    "C9 R20": "#05194B",
    "C10 R20": "#0064C3",
    "C11 R20": "#005F64",
    "C12 R20": "#006450",
    "C13 R20": "#328723",
    "C14 R20": "#E1E100",
    "C15 R20": "#787878",
    "C16 R20": "#C3C3AA",
    "C17 R20": "#BEA59B",
    "C18 R20": "#D7AAB4",
    "C19 R20": "#AA91A0",
    "C20 R20": "#5A91C3",
    "C21 R20": "#6E8C82",
    "C22 R20": "#5A6437",
    "C23 R20": "#EBE15A",
    "C24 R20": "#32C3D2",
    "C25 R20": "#E1BED7",
    "C26 R20": "#EBD2DC",
    "C27 R20": "#C89B4B",
    "C28 R20": "#965FC3",
    "C29 R20": "#508287",
    "C30 R20": "#D7AA6E",
    "C31 R20": "#9BA5A0",
    "C32 R20": "#232D23",
    "C33 R20": "#E1059B",
    
    "C1 R21": "#F5DC73",
    "C2 R21": "#69410F",
    "C3 R21": "#823C0F",
    "C4 R21": "#CD2332",
    "C5 R21": "#871E32",
    "C6 R21": "#F0AFDC",
    "C7 R21": "#A073C3",
    "C8 R21": "#AAAAD7",
    "C9 R21": "#A5C3E6",
    "C10 R21": "#0073C8",
    "C11 R21": "#96D7D7",
    "C12 R21": "#91D2C8",
    "C13 R21": "#326E23",
    "C14 R21": "#FAE100",
    "C15 R21": "#555555",
    "C16 R21": "#D2C8A5",
    "C17 R21": "#EBC3A5",
    "C18 R21": "#C8A5AA",
    "C19 R21": "#B99BC3",
    "C20 R21": "#7D96AA",
    "C21 R21": "#6E9B8C",
    "C22 R21": "#6E732D",
    "C23 R21": "#E6D719",
    "C24 R21": "#00AFD7",
    "C25 R21": "#DCA0C8",
    "C26 R21": "#F0C3CD",
    "C27 R21": "#F5AF00",
    "C28 R21": "#8732B9",
    "C29 R21": "#005055",
    "C30 R21": "#C88C41",
    "C31 R21": "#6E7378",
    "C32 R21": "#3C2D1E",
    "C33 R21": "#D2005F",
    
    "C1 R22": "#F0DCA5",
    "C2 R22": "#EBC364",
    "C3 R22": "#FABEAA",
    "C4 R22": "#BE372D",
    "C5 R22": "#E6AAC8",
    "C6 R22": "#EBBEE1",
    "C7 R22": "#8C4696",
    "C8 R22": "#9B9BDC",
    "C9 R22": "#8CA5DC",
    "C10 R22": "#005096",
    "C11 R22": "#73D7D2",
    "C12 R22": "#7DDCC3",
    "C13 R22": "#C8E1A0",
    "C14 R22": "#DCDC00",
    "C15 R22": "#1E1E23",
    "C16 R22": "#D2CDBE",
    "C17 R22": "#CDB9B4",
    "C18 R22": "#E1B9C3",
    "C19 R22": "#C3AFB9",
    "C20 R22": "#91B4D7",
    "C21 R22": "#8CA59B",
    "C22 R22": "#648C37",
    "C23 R22": "#E1C800",
    "C24 R22": "#0096C8",
    "C25 R22": "#D787B9",
    "C26 R22": "#F0AABE",
    "C27 R22": "#EBAA00",
    "C28 R22": "#D2D2E1",
    "C29 R22": "#23505F",
    "C30 R22": "#AF690F",
    "C31 R22": "#505F6E",
    "C32 R22": "#412D2D",
    "C33 R22": "#4B00A5",
    
    "C1 R23": "#F5D76E",
    "C2 R23": "#EBB946",
    "C3 R23": "#FFA087",
    "C4 R23": "#AA2328",
    "C5 R23": "#E678A5",
    "C6 R23": "#EB82CD",
    "C7 R23": "#A046C3",
    "C8 R23": "#BEC8E6",
    "C9 R23": "#4187D7",
    "C10 R23": "#005A9B",
    "C11 R23": "#7DDCD2",
    "C12 R23": "#73CDB9",
    "C13 R23": "#B9DC8C",
    "C14 R23": "#E6D700",
    "C15 R23": "#D2D2D2",
    "C16 R23": "#DCD2BE",
    "C17 R23": "#EBCDB9",
    "C18 R23": "#D7B9BE",
    "C19 R23": "#C8AFCD",
    "C20 R23": "#A0B4C3",
    "C21 R23": "#96B4AA",
    "C22 R23": "#6E7346",
    "C23 R23": "#D2B900",
    "C24 R23": "#0082BE",
    "C25 R23": "#C85FA0",
    "C26 R23": "#F08CA5",
    "C27 R23": "#FAA573",
    "C28 R23": "#B4B9DC",
    "C29 R23": "#A5E1C8",
    "C30 R23": "#9B5500",
    "C31 R23": "#3C4B5A",
    "C32 R23": "#0F1923",
    "C33 R23": "#D7D7D7",
    
    "C1 R24": "#F0D791",
    "C2 R24": "#EBA523",
    "C3 R24": "#FF9B6E",
    "C4 R24": "#9B232D",
    "C5 R24": "#DC4182",
    "C6 R24": "#DC6EC8",
    "C7 R24": "#964BAF",
    "C8 R24": "#BECDE6",
    "C9 R24": "#00237D",
    "C10 R24": "#004169",
    "C11 R24": "#78CDC3",
    "C12 R24": "#37D2AF",
    "C13 R24": "#A0D264",
    "C14 R24": "#BEB400",
    "C15 R24": "#C3C3C8",
    "C16 R24": "#5F5014",
    "C17 R24": "#D7C8C3",
    "C18 R24": "#E6C8D2",
    "C19 R24": "#D2BEC8",
    "C20 R24": "#AFC8E1",
    "C21 R24": "#A5B9B4",
    "C22 R24": "#878C50",
    "C23 R24": "#E6E6BE",
    "C24 R24": "#006EAA",
    "C25 R24": "#B42878",
    "C26 R24": "#EB6482",
    "C27 R24": "#E1A05A",
    "C28 R24": "#A0A0C3",
    "C29 R24": "#2DCD82",
    "C30 R24": "#E1B4AA",
    "C31 R24": "#192837",
    "C32 R24": "#373732",
    "C33 R24": "#736964",
    
    "C1 R25": "#FAD24B",
    "C2 R25": "#EB7D00",
    "C3 R25": "#FF8C6E",
    "C4 R25": "#78281E",
    "C5 R25": "#D2004B",
    "C6 R25": "#E150B9",
    "C7 R25": "#8246AF",
    "C8 R25": "#AFBEE6",
    "C9 R25": "#002364",
    "C10 R25": "#004669",
    "C11 R25": "#46C3C3",
    "C12 R25": "#00AA87",
    "C13 R25": "#5FB914",
    "C14 R25": "#B9A500",
    "C15 R25": "#A5AAAF",
    "C16 R25": "#967D05",
    "C17 R25": "#4B2D23",
    "C18 R25": "#DCC8CD",
    "C19 R25": "#D7C8DC",
    "C20 R25": "#B9C8D2",
    "C21 R25": "#AAC3B9",
    "C22 R25": "#AFC38C",
    "C23 R25": "#E6E1AF",
    "C24 R25": "#CDD7E1",
    "C25 R25": "#A00055",
    "C26 R25": "#E1415F",
    "C27 R25": "#CD782D",
    "C28 R25": "#918CCD",
    "C29 R25": "#00C378",
    "C30 R25": "#D2A58C",
    "C31 R25": "#7D7869",
    "C32 R25": "#2D2823",
    "C33 R25": "#645A50",
    
    "C1 R26": "#FFAF00",
    "C2 R26": "#C87300",
    "C3 R26": "#FF783C",
    "C4 R26": "#78191E",
    "C5 R26": "#AA0041",
    "C6 R26": "#D732B4",
    "C7 R26": "#69146E",
    "C8 R26": "#918CCD",
    "C9 R26": "#001E4B",
    "C10 R26": "#00324B",
    "C11 R26": "#46CDCD",
    "C12 R26": "#00BE8C",
    "C13 R26": "#4BA000",
    "C14 R26": "#AAA000",
    "C15 R26": "#828C91",
    "C16 R26": "#AA8C00",
    "C17 R26": "#5A2D23",
    "C18 R26": "#4B1E23",
    "C19 R26": "#D7D2D2",
    "C20 R26": "#BED2E1",
    "C21 R26": "#BECDC8",
    "C22 R26": "#91966E",
    "C23 R26": "#E1DC96",
    "C24 R26": "#C3CDE1",
    "C25 R26": "#E1CDDC",
    "C26 R26": "#D22337",
    "C27 R26": "#D77823",
    "C28 R26": "#5A4678",
    "C29 R26": "#73AA4B",
    "C30 R26": "#C89173",
    "C31 R26": "#00A5C8",
    "C32 R26": "#0041AF",
    "C33 R26": "#D7D2CD",
    
    "C1 R27": "#FABE14",
    "C2 R27": "#9B5F00",
    "C3 R27": "#FF693C",
    "C4 R27": "#5A2323",
    "C5 R27": "#8C1E46",
    "C6 R27": "#DC32AA",
    "C7 R27": "#8C14AF",
    "C8 R27": "#7D7DD2",
    "C9 R27": "#91B9E6",
    "C10 R27": "#00374B",
    "C11 R27": "#32CDC8",
    "C12 R27": "#008C5A",
    "C13 R27": "#4B870A",
    "C14 R27": "#968700",
    "C15 R27": "#5F5A5A",
    "C16 R27": "#D7C864",
    "C17 R27": "#6E3228",
    "C18 R27": "#500F0F",
    "C19 R27": "#50235A",
    "C20 R27": "#CDD2DC",
    "C21 R27": "#BED2CD",
    "C22 R27": "#A5A573",
    "C23 R27": "#DCD773",
    "C24 R27": "#91AFCD",
    "C25 R27": "#E1C8D7",
    "C26 R27": "#F5C8AA",
    "C27 R27": "#BE6414",
    "C28 R27": "#503C5A",
    "C29 R27": "#00A55A",
    "C30 R27": "#9B5028",
    "C31 R27": "#5ADC46",
    "C32 R27": "#DCDCDC",
    "C33 R27": "#C3BEBE",
    
    "C1 R28": "#FFAF00",
    "C2 R28": "#6E551E",
    "C3 R28": "#FF5A00",
    "C4 R28": "#F5B RC8",
    "C5 R28": "#73233C",
    "C6 R28": "#C30091",
    "C7 R28": "#7D2891",
    "C8 R28": "#8C9BDC",
    "C9 R28": "#699BD2",
    "C10 R28": "#A0D7E6",
    "C11 R28": "#41C3B4",
    "C12 R28": "#00AA64",
    "C13 R28": "#465A19",
    "C14 R28": "#968700",
    "C15 R28": "#414650",
    "C16 R28": "#DCCD7D",
    "C17 R28": "#AA7D69",
    "C18 R28": "#7D2841",
    "C19 R28": "#282346",
    "C20 R28": "#00323C",
    "C21 R28": "#D2D7D7",
    "C22 R28": "#BECDA0",
    "C23 R28": "#D7C846",
    "C24 R28": "#7396BE",
    "C25 R28": "#DCB9D2",
    "C26 R28": "#FAC396",
    "C27 R28": "#E6B9AF",
    "C28 R28": "#32192D",
    "C29 R28": "#1E5A32",
    "C30 R28": "#7D3C14",
    "C31 R28": "#8C7364",
    "C32 R28": "#6E6E73",
    "C33 R28": "#B9B4AF",
    
    "C1 R29": "#FFB400",
    "C2 R29": "#F5CD9B",
    "C3 R29": "#FF5000",
    "C4 R29": "#F58CA5",
    "C5 R29": "#F59BC3",
    "C6 R29": "#BE1991",
    "C7 R29": "#550087",
    "C8 R29": "#A0B9E6",
    "C9 R29": "#0073D2",
    "C10 R29": "#55C8E6",
    "C11 R29": "#00AAA5",
    "C12 R29": "#007355",
    "C13 R29": "#D2E6A0",
    "C14 R29": "#695A05",
    "C15 R29": "#1E282D",
    "C16 R29": "#E6D796",
    "C17 R29": "#C3A596",
    "C18 R29": "#D28CA5",
    "C19 R29": "#5A1E78",
    "C20 R29": "#00232D",
    "C21 R29": "#1E463C",
    "C22 R29": "#AAAF91",
    "C23 R29": "#C3AF00",
    "C24 R29": "#557DAA",
    "C25 R29": "#C896B4",
    "C26 R29": "#FAAF78",
    "C27 R29": "#E66450",
    "C28 R29": "#B9BED7",
    "C29 R29": "#00461E",
    "C30 R29": "#694B46",
    "C31 R29": "#FFE600",
    "C32 R29": "#5F5F64",
    "C33 R29": "#AFAAA5",
    
    "C1 R30": "#C39100",
    "C2 R30": "#FFAF78",
    "C3 R30": "#E15000",
    "C4 R30": "#F55A7D",
    "C5 R30": "#F578B4",
    "C6 R30": "#A50082",
    "C7 R30": "#5A195A",
    "C8 R30": "#5078D2",
    "C9 R30": "#0032AA",
    "C10 R30": "#00AFE1",
    "C11 R30": "#00B4B4",
    "C12 R30": "#006E32",
    "C13 R30": "#C8E682",
    "C14 R30": "#C8C8C3",
    "C15 R30": "#D2C8C8",
    "C16 R30": "#E6DCAF",
    "C17 R30": "#D2B9AF",
    "C18 R30": "#DCA5B9",
    "C19 R30": "#3C3764",
    "C20 R30": "#143232",
    "C21 R30": "#142D23",
    "C22 R30": "#BEC39B",
    "C23 R30": "#AF9B00",
    "C24 R30": "#145087",
    "C25 R30": "#B4739B",
    "C26 R30": "#F59146",
    "C27 R30": "#E14B3C",
    "C28 R30": "#87A5DC",
    "C29 R30": "#DCE1D7",
    "C30 R30": "#5A4637",
    "C31 R30": "#FFA041",
    "C32 R30": "#D2D2D2",
    "C33 R30": "#A59B96",
    
    "C1 R31": "#B48700",
    "C2 R31": "#FAC387",
    "C3 R31": "#E14600",
    "C4 R31": "#E6230F",
    "C5 R31": "#F5509B",
    "C6 R31": "#AA007D",
    "C7 R31": "#780A91",
    "C8 R31": "#736EBE",
    "C9 R31": "#003296",
    "C10 R31": "#006EAA",
    "C11 R31": "#00BEB4",
    "C12 R31": "#00644B",
    "C13 R31": "#B4E15A",
    "C14 R31": "#B9B4AF",
    "C15 R31": "#C3B4B9",
    "C16 R31": "#503C1E",
    "C17 R31": "#D7C8C3",
    "C18 R31": "#E1B4C3",
    "C19 R31": "#6E1E9B",
    "C20 R31": "#003C50",
    "C21 R31": "#0F5F55",
    "C22 R31": "#BED2A5",
    "C23 R31": "#E1DCBE",
    "C24 R31": "#00285A",
    "C25 R31": "#9B4678",
    "C26 R31": "#F07D0F",
    "C27 R31": "#C85055",
    "C28 R31": "#7D91DC",
    "C29 R31": "#BEDCA0",
    "C30 R31": "#E6C3B9",
    "C31 R31": "#FF555A",
    "C32 R31": "#C8C8C8",
    "C33 R31": "#9B918C",
    
    "C1 R32": "#A57D0A",
    "C2 R32": "#FF9637",
    "C3 R32": "#BE500A",
    "C4 R32": "#CD0A32",
    "C5 R32": "#E61478",
    "C6 R32": "#960073",
    "C7 R32": "#641478",
    "C8 R32": "#5A50C3",
    "C9 R32": "#002D82",
    "C10 R32": "#00557D",
    "C11 R32": "#00A591",
    "C12 R32": "#006441",
    "C13 R32": "#87CD00",
    "C14 R32": "#A5A09B",
    "C15 R32": "#B5A0AA",
    "C16 R32": "#4B2314",
    "C17 R32": "#692D23",
    "C18 R32": "#E6BECD",
    "C19 R32": "#555078",
    "C20 R32": "#005F69",
    "C21 R32": "#5A6E5F",
    "C22 R32": "#B9BEA5",
    "C23 R32": "#DCD7AF",
    "C24 R32": "#D2D7E6",
    "C25 R32": "#781E4B",
    "C26 R32": "#D75F00",
    "C27 R32": "#AA4655",
    "C28 R32": "#739BD7",
    "C29 R32": "#91DC6E",
    "C30 R32": "#C8AAA0",
    "C31 R32": "#FF14A5",
    "C32 R32": "#B9B9B9",
    "C33 R32": "#8C877D",
    
    "C1 R33": "#9B7800",
    "C2 R33": "#FFA550",
    "C3 R33": "#A53C0F",
    "C4 R33": "#A03214",
    "C5 R33": "#CD0064",
    "C6 R33": "#781455",
    "C7 R33": "#37144B",
    "C8 R33": "#4150C3",
    "C9 R33": "#001E46",
    "C10 R33": "#003746",
    "C11 R33": "#008278",
    "C12 R33": "#00503C",
    "C13 R33": "#73B400",
    "C14 R33": "#918C82",
    "C15 R33": "#7D696E",
    "C16 R33": "#69461E",
    "C17 R33": "#9B281E",
    "C18 R33": "#5A2346",
    "C19 R33": "#A06EC8",
    "C20 R33": "#3C5555",
    "C21 R33": "#007369",
    "C22 R33": "#CDCDAF",
    "C23 R33": "#D2CD9B",
    "C24 R33": "#BECDDC",
    "C25 R33": "#E1C8D2",
    "C26 R33": "#C85000",
    "C27 R33": "#9B1E41",
    "C28 R33": "#648CB9",
    "C29 R33": "#5FCD3C",
    "C30 R33": "#B97364",
    "C31 R33": "#916973",
    "C32 R33": "#AFAFAF",
    "C33 R33": "#877873",
    
    "C1 R34": "#7D5F0F",
    "C2 R34": "#FF7300",
    "C3 R34": "#692D0F",
    "C4 R34": "#781E2D",
    "C5 R34": "#A50A50",
    "C6 R34": "#7D005F",
    "C7 R34": "#551950",
    "C8 R34": "#2D73D7",
    "C9 R34": "#BED7EB",
    "C10 R34": "#64C8E1",
    "C11 R34": "#009B9B",
    "C12 R34": "#003214",
    "C13 R34": "#648C00",
    "C14 R34": "#786E64",
    "C15 R34": "#4B3C3C",
    "C16 R34": "#8C5A32",
    "C17 R34": "#D7231E",
    "C18 R34": "#462337",
    "C19 R34": "#827DA0",
    "C20 R34": "#004155",
    "C21 R34": "#697D6E",
    "C22 R34": "#CDD7B9",
    "C23 R34": "#C3BE78",
    "C24 R34": "#9BAACD",
    "C25 R34": "#DCB9CD",
    "C26 R34": "#EBCDB4",
    "C27 R34": "#640F28",
    "C28 R34": "#375AAF",
    "C29 R34": "#69A54B",
    "C30 R34": "#AA645A",
    "C31 R34": "#D20AAF",
    "C32 R34": "#AFAFAF",
    "C33 R34": "#EB5500"
};

// Calculate Euclidean distance between two colors
function colorDistance(color1, color2) {
    return Math.sqrt(
        Math.pow(color1.r - color2.r, 2) +
        Math.pow(color1.g - color2.g, 2) +
        Math.pow(color1.b - color2.b, 2)
        );
    }
    
    // Function to find the top 3 closest colors
    function findTopClosestColors(inputColor) {
        const inputRgb = hexToRgbColor(inputColor);
        const colorDistances = Object.entries(colorMapping).map(([key, hexColor]) => {
            const distance = colorDistance(inputRgb, hexToRgbColor(hexColor));
            return { key, hexColor, distance };
        });
        
        // Sort by distance and return the top 3 closest colors
        return colorDistances.sort((a, b) => a.distance - b.distance).slice(0, 3);
    }
    
    // Display the closest colors with their row and column values in separate preview boxes
    function displayClosestColors(hexInput, indexPrefix) {
        const closestMatches = findTopClosestColors(hexInput);
        closestMatches.forEach((match, i) => {
            let colorPreviewId = `colorPreview${indexPrefix}.${i + 1}`;
            let closestColorInfoId = `closestColorInfo${indexPrefix}.${i + 1}`;
            if(indexPrefix > 6){
                colorPreviewId += `-${sectionsConfig[currentSection - 1].id}`;
                closestColorInfoId += `-${sectionsConfig[currentSection - 1].id}`;
            }
            const previewBox = document.getElementById(colorPreviewId);
            const infoBox = document.getElementById(closestColorInfoId);
            const [col, row] = match.key.split('R');
            
            previewBox.style.backgroundColor = match.hexColor;
            infoBox.innerHTML = `<br>${i + 1}: ${match.hexColor}&nbsp;&nbsp;&nbsp;&nbsp; Row: ${row}, Column: ${col.replace('C', '')}`;
        });
    }
    
    // Handle hex input validation and update preview and closest colors
    function handleHexInput(input, indexPrefix) {
        input.value = input.value.toUpperCase().substring(0, 7).replace(/[^#A-F0-9]/g, '');
        let userColorPreviewId = `userColorPreview${indexPrefix}`;
        if(indexPrefix > 6){
            userColorPreviewId += `-${sectionsConfig[currentSection - 1].id}`;
        }
        if (!input.value.startsWith('#')) input.value = '#' + input.value;
        
        if (/^#([0-9A-F]{6})$/i.test(input.value)) {
            document.getElementById(userColorPreviewId).style.backgroundColor = input.value;
            displayClosestColors(input.value, indexPrefix);
        } else {
            resetColorPreviewAndMatches(indexPrefix);
        }
    }
    
    // Reset preview boxes and closest matches display for specific index prefix
    function resetColorPreviewAndMatches(indexPrefix) {
        let userColorPreviewId = `userColorPreview${indexPrefix}`;
        if(indexPrefix > 6){
            userColorPreviewId += `-${sectionsConfig[currentSection - 1].id}`;
        }
        document.getElementById(userColorPreviewId).style.backgroundColor = 'transparent';
        for (let i = 1; i <= 3; i++) {
            let colorPreviewId = `colorPreview${indexPrefix}.${i}`;
            let closestColorInfoId = `closestColorInfo${indexPrefix}.${i}`;
            if(indexPrefix > 6){
                colorPreviewId += `-${sectionsConfig[currentSection - 1].id}`;
                closestColorInfoId += `-${sectionsConfig[currentSection - 1].id}`;
            }
            document.getElementById(colorPreviewId).style.backgroundColor = 'transparent';
            document.getElementById(closestColorInfoId).textContent = '';
        }
    }
    
    // Function to activate the eyedropper and set the selected color
    async function useEyeDropper(indexPrefix) {
        if (!window.EyeDropper) {
            alert("Your browser does not support the EyeDropper API.");
            return;
        }
        
        const eyeDropper = new EyeDropper();
        try {
            const result = await eyeDropper.open();
            const hexColor = result.sRGBHex;
            
            // Set the hex color in the input field and trigger the color handling
            let hexInputId = `hexInput${indexPrefix}`;
            if(indexPrefix > 6){
                hexInputId += `-${sectionsConfig[currentSection - 1].id}`;
            }

            const hexInput = document.getElementById(hexInputId);
            hexInput.value = hexColor;
            handleHexInput(hexInput, indexPrefix);  // Trigger existing logic to display closest matches
        } catch (error) {
            console.error("Eyedropper cancelled or failed: ", error);
        }
    }
    
    let currentOpenDropdown = null;
    let currentSelectedColorDiv = null; // To track the current active selected color box
    
    // Object to store the last selected row and column values for each dropdown
    let lastSelectedValues = {
        selectedColor1: { row: '0', column: '0' }, // Example default for the first dropdown
        selectedColor2: { row: '0', column: '0' }, // Example default for the second dropdown
        selectedColor3: { row: '0', column: '0' },  // Example default for the third dropdown
        selectedColor4: { row: '0', column: '0' }, // Example default for the fourth dropdown
        selectedColor5: { row: '0', column: '0' }, // Example default for the fifth dropdown
        selectedColor6: { row: '0', column: '0' }  // Example default for the sixth dropdown
    };
    
    const colorNames = {
        '#00233C': 'True Navy',
        '#0041AF': 'True Royal',
        '#009BD7': 'Columbia Blue',
        '#8CA5DC': 'Carolina Blue',
        '#28A523': 'Kelly Green',
        '#00461E': 'Forest Green',
        '#FAE100': 'Yellow',
        '#FABE14': 'Yellow Gold',
        '#FFAF00': 'Athletic Gold',
        '#CDA55F': 'Vegas Gold',
        '#9B4B00': 'Copper',
        '#FF5A00': 'Orange',
        '#E6230F': 'Red',
        '#500F0F': 'Maroon',
        '#37144B': 'Purple',
        '#F5509B': 'Pink',
        '#E6F541': 'Neon Yellow',
        '#FFFFFF': 'White',
        '#B4AFA5': 'Cool Gray',
        '#7D7873': 'Slate Gray',
        '#000000': 'Black',
        'transparent': 'None'
    };
    
    
    
    // Function to toggle dropdown
    function toggleColorDropdown(dropdownId, selectedColorId) {
        const dropdown = document.getElementById(dropdownId);
        const selectedColorDiv = document.getElementById(selectedColorId);

        if(!lastSelectedValues[selectedColorId]){
            lastSelectedValues[selectedColorId] = {row: '0', column: '0'};
        }
        
        const rowInputId = selectedColorId.replace('selectedColor', 'rowNumber');
        const columnInputId = selectedColorId.replace('selectedColor', 'columnNumber');
        const displayBoxId = selectedColorId.replace('selectedColor', 'colorDisplayBox');
        const textId = selectedColorId.replace('selectedColor', 'colorText');
        
        // Close any currently open dropdown before opening the new one
        if (currentOpenDropdown && currentOpenDropdown !== dropdown) {
            currentOpenDropdown.style.display = 'none';
            currentSelectedColorDiv.classList.remove('active'); // Remove active class from previously active box
        }
        
        if (dropdown.style.display === 'block') {
            dropdown.style.display = 'none';
            selectedColorDiv.classList.remove('active'); // Remove active class when dropdown closes
            currentOpenDropdown = null;
            currentSelectedColorDiv = null;
        } else {
            // Restore the last selected row and column values for the current dropdown
            document.getElementById(rowInputId).value = lastSelectedValues[selectedColorId].row;
            document.getElementById(columnInputId).value = lastSelectedValues[selectedColorId].column;
            
            // Call updateDisplayedColor to reset the display box to the correct color
            updateDisplayedColor(rowInputId, columnInputId, displayBoxId, textId, selectedColorId);
            
            dropdown.style.display = 'block';
            selectedColorDiv.classList.add('active'); // Add active class when dropdown opens
            currentOpenDropdown = dropdown;
            currentSelectedColorDiv = selectedColorDiv; // Keep track of the currently active box
            
        }
    }
    
    function hexToRgbColor2(hex) {
        let bigint = parseInt(hex.slice(1), 16);
        let r = (bigint >> 16) & 255;
        let g = (bigint >> 8) & 255;
        let b = bigint & 255;
        return `rgb(${r}, ${g}, ${b})`;
    }

    function hexToRgb(hex) {
        // Remove the leading # if present
        hex = hex.replace(/^#/, '');
    
        // Convert 3-digit HEX to 6-digit HEX
        if (hex.length === 3) {
            hex = hex.split('').map(char => char + char).join('');
        }
    
        const bigint = parseInt(hex, 16);
        const r = (bigint >> 16) & 255;
        const g = (bigint >> 8) & 255;
        const b = bigint & 255;
    
        return { r, g, b };
    }
    
    function selectColor(color, selectedColorId, dropdownId) {
        const selectedColorDiv = document.getElementById(selectedColorId);
        selectedColorDiv.style.backgroundColor = color;
        
        const rowInputId = selectedColorId.replace('selectedColor', 'rowNumber');
        const columnInputId = selectedColorId.replace('selectedColor', 'columnNumber');
        const displayBoxId = selectedColorId.replace('selectedColor', 'colorDisplayBox');
        const colorTextId = selectedColorId.replace('selectedColor', 'colorText'); // Get the ID of the colorText span
        
        // Save the current row and column values as the last selected ones
        lastSelectedValues[selectedColorId] = {
            row: document.getElementById(rowInputId).value,
            column: document.getElementById(columnInputId).value
        };
        
        // Handle both hex and rgb color formats
        const rgbColor = color.startsWith('#') ? hexToRgbColor2(color) : color;
        
        // Find all color options and remove the 'selected' class from them
        const allOptions = document.querySelectorAll(`#${dropdownId} .color-option`);
        allOptions.forEach(option => {
            option.classList.remove('selected');
            // Handle both hex and rgb formats
            if (option.style.backgroundColor === rgbColor) {
                option.classList.add('selected');
            }
        });
        
        // Apply active class to the color display box if the selected color matches
        const displayBox = document.getElementById(displayBoxId);
        displayBox.classList.remove('active');
        if (displayBox.style.backgroundColor === rgbColor) {
            displayBox.classList.add('active');
        } else {
            displayBox.classList.remove('active');
        }
        
        // Update the color name or hex code in the colorText span
        const colorTextSpan = document.getElementById(colorTextId + ".5");
        if (colorNames[color]) {
            // If a base color is selected, show the name
            colorTextSpan.textContent = colorNames[color];
        } else {
            const rowValue = document.getElementById(rowInputId).value;
            const columnValue = document.getElementById(columnInputId).value;
            const mappingId = `C${columnValue} R${rowValue}`;
            colorTextSpan.textContent = mappingId;
        }
        
        // Close the dropdown
        document.getElementById(dropdownId).style.display = 'none';
        selectedColorDiv.classList.remove('active');
        currentOpenDropdown = null;

        switch (selectedColorId){
            case "selectedColor1":
                const canvasFront = document.getElementById('TankTopCanvas');
                if (canvasFront) {
                    const context = canvasFront.getContext('2d');
                    context.clearRect(0, 0, canvasFront.width, canvasFront.height); // Clear the canvas
                    context.fillStyle = color;
                    context.fill(); // Fill with the new color
                    context.lineWidth = 0.1;
                    context.stroke();

                    const rgb = hexToRgb(color);
                    console.log(rgb, rgb.r, rgb.g, rgb.b);

                    // Calculate brightness (perceived brightness)
                    const brightness = Math.sqrt(
                        0.299 * (rgb.r * rgb.r) +
                        0.587 * (rgb.g * rgb.g) +
                        0.114 * (rgb.b * rgb.b)
                    );

                    // Choose class based on brightness
                    const image = document.getElementById("NordLogo");
                    const designName = document.getElementById("templateLabel").innerText;
                    if(itDescript.toUpperCase().includes("COMPRESSION")){
                        if (brightness > 150) { // Adjust this threshold as needed
                            if(designName.includes('2') || designName.includes('5') || designName.includes('6')){
                                image.src = window.shopifyAssetPaths.logos.NordLogo2;
                            }
                            else{
                                image.src = window.shopifyAssetPaths.logos.NordLogo1;
                            }
                            
                        } else {
                            if(designName.includes('2') || designName.includes('5') || designName.includes('6')){
                                image.src = window.shopifyAssetPaths.logos.NordLogo4;
                            }
                            else{
                                image.src = window.shopifyAssetPaths.logos.NordLogo3;
                            }
                            
                        }
                    }
                    else{
                        console.log(brightness);
                        if (brightness > 150) { // Adjust this threshold as needed
                            if(designName.includes('4') || designName.includes('5') || designName.includes('8')){
                                image.src = window.shopifyAssetPaths.logos.NordLogo2;
                            }
                            else{
                                image.src = window.shopifyAssetPaths.logos.NordLogo1;
                            }
                            
                        } else {
                            if(designName.includes('4') || designName.includes('5') || designName.includes('8')){
                                image.src = window.shopifyAssetPaths.logos.NordLogo4;
                            }
                            else{
                                image.src = window.shopifyAssetPaths.logos.NordLogo3;
                            }
                            
                        }
                        console.log(image.src);
                    }
                }
                const hiddencanvasFront = document.getElementById('hiddenTankTopCanvas');
                if (hiddencanvasFront) {
                    const context = hiddencanvasFront.getContext('2d');
                    context.clearRect(0, 0, hiddencanvasFront.width, hiddencanvasFront.height); // Clear the canvas
                    context.fillStyle = color;
                    context.fill();
                    context.lineWidth = 0.1;
                    context.stroke();
                }
                break;
            
            case "selectedColor2":
                const canvasBack = document.getElementById('TankTopBackCanvas');
                if (canvasBack) {
                    const context = canvasBack.getContext('2d');
                    context.clearRect(0, 0, canvasBack.width, canvasBack.height);
                    context.fillStyle = color;
                    context.fill();
                    context.lineWidth = 0.1;
                    context.stroke();
                }
                const hiddencanvasBack = document.getElementById('hiddenTankTopBackCanvas');
                if (hiddencanvasBack) { 
                    const context = hiddencanvasBack.getContext('2d');
                    context.clearRect(0, 0, hiddencanvasBack.width, hiddencanvasBack.height);
                    context.fillStyle = color;
                    context.fill();
                    context.lineWidth = 0.1;
                    context.stroke();
                }
                break;

            case "selectedColor3":
                const canvasCuff1 = document.getElementById('TankTopCuffCanvas');
                const canvasCuff2 = document.getElementById('TankTopBackCuffCanvas');
                const canvasCuff3 = document.getElementById('TankTopBackRacerCuffCanvas');
                if (canvasCuff1 && canvasCuff2 && canvasCuff3) {
                    const context1 = canvasCuff1.getContext('2d');
                    const context2 = canvasCuff2.getContext('2d');
                    const context3 = canvasCuff3.getContext('2d');
                    context1.clearRect(0, 0, canvasCuff1.width, canvasCuff1.height);
                    context2.clearRect(0, 0, canvasCuff2.width, canvasCuff2.height);
                    context3.clearRect(0, 0, canvasCuff3.width, canvasCuff3.height);
                    context1.fillStyle = color;
                    context2.fillStyle = color;
                    context3.fillStyle = color;
                    context1.fill();
                    context2.fill();
                    context3.fill();
                    context1.lineWidth = 0.1;
                    context1.stroke();
                    context2.lineWidth = 0.1;
                    context2.stroke();
                    context3.lineWidth = 0.1;
                    context3.stroke();
                }
                const hiddencanvasCuff1 = document.getElementById('hiddenTankTopCuffCanvas');
                const hiddencanvasCuff2 = document.getElementById('hiddenTankTopBackCuffCanvas');
                const hiddencanvasCuff3 = document.getElementById('hiddenTankTopBackRacerCuffCanvas');
                if (hiddencanvasCuff1 && hiddencanvasCuff2 && hiddencanvasCuff3) {
                    const context1 = hiddencanvasCuff1.getContext('2d');
                    const context2 = hiddencanvasCuff2.getContext('2d');
                    const context3 = hiddencanvasCuff3.getContext('2d');
                    context1.clearRect(0, 0, hiddencanvasCuff1.width, hiddencanvasCuff1.height);
                    context2.clearRect(0, 0, hiddencanvasCuff2.width, hiddencanvasCuff2.height);
                    context3.clearRect(0, 0, hiddencanvasCuff3.width, hiddencanvasCuff3.height);
                    context1.fillStyle = color;
                    context2.fillStyle = color;
                    context3.fillStyle = color;
                    context1.fill();
                    context2.fill();
                    context3.fill();
                    context1.lineWidth = 0.1;
                    context1.stroke();
                    context2.lineWidth = 0.1;
                    context2.stroke();
                    context3.lineWidth = 0.1;
                    context3.stroke();
                }
                break;

            case "selectedColor4":
                const canvasTemplate1 = document.getElementById('TankTopTemplateColor1Canvas');
                if (canvasTemplate1) {
                    const context = canvasTemplate1.getContext('2d');
                    context.clearRect(0, 0, canvasTemplate1.width, canvasTemplate1.height);
                    context.fillStyle = color;
                    context.fill();
                    context.lineWidth = 0.1;
                    context.stroke();
                }
                const hiddencanvasTemplate1 = document.getElementById('hiddenTankTopTemplateColor1Canvas');
                if (hiddencanvasTemplate1) {
                    const context = hiddencanvasTemplate1.getContext('2d');
                    context.clearRect(0, 0, hiddencanvasTemplate1.width, hiddencanvasTemplate1.height);
                    context.fillStyle = color;
                    context.fill();
                    context.lineWidth = 0.1;
                    context.stroke();
                }
                
                break;

            case "selectedColor5":
                const canvasTemplate2 = document.getElementById('TankTopTemplateColor2Canvas');
                if (canvasTemplate2) {
                    const context = canvasTemplate2.getContext('2d');
                    context.clearRect(0, 0, canvasTemplate2.width, canvasTemplate2.height);
                    context.fillStyle = color;
                    context.fill();
                    context.lineWidth = 0.1;
                    context.stroke();
                }
                const hiddencanvasTemplate2 = document.getElementById('hiddenTankTopTemplateColor2Canvas');
                if (hiddencanvasTemplate2) {
                    const context = hiddencanvasTemplate2.getContext('2d');
                    context.clearRect(0, 0, hiddencanvasTemplate2.width, hiddencanvasTemplate2.height);
                    context.fillStyle = color;
                    context.fill();
                    context.lineWidth = 0.1;
                    context.stroke();
                }
                
                break;
            
            case "selectedColor6":
                const canvasTemplate3 = document.getElementById('TankTopTemplateColor3Canvas');
                if (canvasTemplate3) {
                    const context = canvasTemplate3.getContext('2d');
                    context.clearRect(0, 0, canvasTemplate3.width, canvasTemplate3.height);
                    context.fillStyle = color;
                    context.fill();
                    context.lineWidth = 0.1;
                    context.stroke();
                }
                const hiddencanvasTemplate3 = document.getElementById('hiddenTankTopTemplateColor3Canvas');
                if (hiddencanvasTemplate3) {
                    const context = hiddencanvasTemplate3.getContext('2d');
                    context.clearRect(0, 0, hiddencanvasTemplate3.width, hiddencanvasTemplate3.height);
                    context.fillStyle = color;
                    context.fill();
                    context.lineWidth = 0.1;
                    context.stroke();
                }
                
                break;
            default:
                const sectionId = sectionsConfig[currentSection-1].id;
                const selectedColorIdPart = selectedColorId.replace(`-${sectionId}`,"");
                const textNumber = parseInt(selectedColorIdPart.replace("selectedColor",""), 10);
                if(textNumber % 2 === 0){ //for outline color
                    const text = document.getElementById(`editable-text-${sectionId}`);
                    updateOutlineColor(text, color);
                }
                else{//for font color
                    const text = document.getElementById(`editable-text-${sectionId}`);
                    updateFontColor(text, color);
                }
                break;

        }
        const templatePreviewImage = document.getElementById("templatePreviewImage");
        populateTemplateDropdown();
        generateThumbnail(selectedTemplate, templatePreviewImage);
    }
    
    function updateDisplayedColor(rowInputId, columnInputId, displayBoxId, textId, selectedColorId) {
        const rowValue = document.getElementById(rowInputId).value;
        const columnValue = document.getElementById(columnInputId).value;
        const mappingId = `C${columnValue} R${rowValue}`; // Generate ID in the format CXXRYY
        
        const displayBox = document.getElementById(displayBoxId);
        const colorText = document.getElementById(textId);
        
        const selectedColorDiv = document.getElementById(selectedColorId);
        
        
        if (colorMapping[mappingId]) {
            displayBox.style.backgroundColor = colorMapping[mappingId]; // Set the box color
            
            // Compare the current row/column with lastSelectedValues for the current dropdown
            const lastSelectedRow = lastSelectedValues[selectedColorId].row;
            const lastSelectedColumn = lastSelectedValues[selectedColorId].column;
            
            // If current row and column match the last selected values, add 'active' class
            if (lastSelectedRow === rowValue && lastSelectedColumn === columnValue && displayBox.style.backgroundColor === selectedColorDiv.style.backgroundColor) {
                displayBox.classList.add('active');
            } else {
                displayBox.classList.remove('active');
            }
            
            // Show the hex code in the colorText span (for row/column-based colors)
            colorText.textContent = colorMapping[mappingId];
            
        } else {
            displayBox.style.backgroundColor = 'white'; // Clear the box if no color found
            colorText.textContent = ''; // Clear the text
            displayBox.classList.remove('active'); // Ensure active class is removed
        }
    }
