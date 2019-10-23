import {Routes} from '@angular/router'
import { SearchComponent } from './search/search.component'
import { ResultComponent } from './result/result.component'

export const ROUTES: Routes = [
    {path: '', component: SearchComponent},
    {path: 'result', component: ResultComponent}
]