import { Pipe } from '@angular/core';

@Pipe({
  name: 'peopleSearch'
})

export class PeopleSearch  {
  transform(people:any[], searchQuery:any):any {
    if (people !== undefined && searchQuery !== undefined) {
      if (searchQuery === '') return people;
      return people.filter(person => {
        if (person.name.first.toLowerCase().indexOf(searchQuery.toLowerCase()) > -1 || person.name.last.toLowerCase().indexOf(searchQuery.toLowerCase()) > -1) {
          return person;
        }
      })
    }
    return people;
  }
}

