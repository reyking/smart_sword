#include "data.h"
#include <cstdio>

int main(){
    for(int i = 0; i<=110; i++){
        sword::dataPool.push(sword::data(i));
    }
    printf("tamano: %d", sword::dataPool.size());
    sword::data * temp = 0;
    do
    {
        temp = &sword::dataPool.front();
        temp->readable_out();
        sword::dataPool.pop();
    }
    while (sword::dataPool.size());
}