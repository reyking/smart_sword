#include "data.h"
#include <cstdio>

int main(){
    for(int i = 0; i<=110; i++){
        sword::dataPool.push(sword::data(i));
    }
    printf("tamano: %d", sword::dataPool.size());
    sword::data * temp = 0;
    char* serializado = sword::serializePool();
    printf(serializado);
}