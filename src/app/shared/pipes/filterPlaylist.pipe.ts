import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPlayList'
})
export class FilterPlayListPipe implements PipeTransform {
      transform(repos: any[], searchText: string): any[] {
        if (!repos) {
          return [];
        }
        if (!searchText) {
          return repos;
        }

        searchText = searchText.toLowerCase();
        return repos.filter( repo => {
          return repo.full_name.toLowerCase().includes(searchText);
        });
      }
    }
