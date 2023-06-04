function skillsMember() {
  var skills = ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python', 'Django'];
  var member = {
    name: 'John',
    age: 25,
    skills: skills
  };
  return member.skills.sort();
}