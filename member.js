function skillsMember() {
  return {
    name: 'John Doe',
    age: 30,
    skills: ['JavaScript', 'React', 'Node.js'],
    showSkills: function() {
      this.skills.forEach(skill => {
        console.log(`${this.name} knows ${skill}`);
      });
    }
  };
}