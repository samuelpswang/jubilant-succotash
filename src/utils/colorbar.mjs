const getColorbarObj = (type) => { return (type in COLORBAR_MAP ? COLORBAR_MAP[type] : null); }

const COLORBAR_MAP = {
  "R": [["funct7", 7], ["rs2", 5], ["rs1", 5], ["funct3", 3], ["rd", 5], ["opcode", 7]],
  "I": [["imm[11:0]", 12], ["rs1", 5], ["funct3", 3], ["rd", 5], ["opcode", 7]],
  "IU": [["funct7", 7], ["imm[4:0]", 5], ["rs1", 5], ["funct3", 3], ["rd", 5], ["opcode", 7]],
  "S": [["imm[11:5]", 7], ["rs2", 5], ["rs1", 5], ["funct3", 3], ["imm[4:0]", 5], ["opcode", 7]],
  "B": [["imm[12]", 1], ["imm[10:5]", 6], ["rs2", 5], ["rs1", 5], ["funct3", 3], ["imm[4:1]", 4], ["imm[11]", 1],  ["opcode", 7]],
  "J": [["imm[20]", 1], ["imm[10:1]", 10], ["imm[11]", 1], ["imm[19:12]", 8], ["rd", 5], ["opcode", 7]]
};

export default { getColorbarObj };