# Contexto
Repositório principal contendo site conectado ao banco. Possuí submodule do Repositório B onde está nosso banco de dados. Possuí também o repositório D onde está a nossa Dashboard.  



# A-GraphCar

### Clone
```
git clone --recurse-submodules https://github.com/GraphCar/A-GraphCar.git
```
### Pull

```
git submodule update --init --recursive
```
```
```
git submodule foreach "(git checkout main; git pull)"
