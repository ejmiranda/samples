content = [
  ["Title", "Table of Contents"],
  ["Chapter 1: Numbers", "page 1"],
  ["Chapter 2: Letters", "page 72"],
  ["Chapter 3: Variables", "page 118"]
]

line_width = 50

content.each do |entry|
  if entry[0] == "Title"
    puts ""
    puts entry[1].center line_width
    puts ""
  else
    puts entry[0].ljust(line_width - entry[1].length) +
      entry[1].rjust(entry[1].length)
  end
end