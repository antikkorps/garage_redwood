// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'

import GarageLayout from 'src/layouts/GarageLayout'
import ScaffoldLayout from 'src/layouts/ScaffoldLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={ScaffoldLayout} title="Roles" titleTo="roles" buttonLabel="New Role" buttonTo="newRole">
        <Route path="/roles/new" page={RoleNewRolePage} name="newRole" />
        <Route path="/roles/{id:Int}/edit" page={RoleEditRolePage} name="editRole" />
        <Route path="/roles/{id:Int}" page={RoleRolePage} name="role" />
        <Route path="/roles" page={RoleRolesPage} name="roles" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Equipments" titleTo="equipments" buttonLabel="New Equipment" buttonTo="newEquipment">
        <Route path="/equipments/new" page={EquipmentNewEquipmentPage} name="newEquipment" />
        <Route path="/equipments/{id:Int}/edit" page={EquipmentEditEquipmentPage} name="editEquipment" />
        <Route path="/equipments/{id:Int}" page={EquipmentEquipmentPage} name="equipment" />
        <Route path="/equipments" page={EquipmentEquipmentsPage} name="equipments" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Users" titleTo="users" buttonLabel="New User" buttonTo="newUser">
        <Route path="/users/new" page={UserNewUserPage} name="newUser" />
        <Route path="/users/{id:Int}/edit" page={UserEditUserPage} name="editUser" />
        <Route path="/users/{id:Int}" page={UserUserPage} name="user" />
        <Route path="/users" page={UserUsersPage} name="users" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Annonces" titleTo="annonces" buttonLabel="New Annonce" buttonTo="newAnnonce">
        <Route path="/annonces/new" page={AnnonceNewAnnoncePage} name="newAnnonce" />
        <Route path="/annonces/{id:Int}/edit" page={AnnonceEditAnnoncePage} name="editAnnonce" />
        <Route path="/annonces/{id:Int}" page={AnnonceAnnoncePage} name="annonce" />
        <Route path="/annonces" page={AnnonceAnnoncesPage} name="annonces" />
      </Set>
      <Set wrap={GarageLayout}>
        <Route path="/annonce-details/{id:Int}" page={AnnonceDetailsPage} name="annonceDetails" />
        <Route path="/about" page={AboutPage} name="about" />
        <Route path="/" page={HomePage} name="home" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
